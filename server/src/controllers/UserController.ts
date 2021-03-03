import { Request, Response } from "express";
import { getUserByUsername, login, register } from "../db/User";
import jwt from "jsonwebtoken";

export const loginUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({
      status: "fail",
      message: "Provide username or password.",
    });
  }

  login({ username, password }).then(async ({ rowCount, rows }) => {
    if (rowCount != 1) {
      return res.status(401).json({
        status: "fail",
        message: "Invalid username or password.",
      });
    }

    //Succesful login
    const { username, id } = rows[0];
    const accessToken = jwt.sign({ username, id }, process.env.JWTSECRET!, {
      expiresIn: "20m",
    });

    const refreshToken = jwt.sign({ username, id }, process.env.REFRESHJWTSECRET!, {
      expiresIn: "7d",
    });

    res.cookie("refToken", refreshToken, {
      httpOnly: true,
      expires: new Date(Date.now() + 7 * 86400000),
    });

    res.cookie("token", accessToken, {
      httpOnly: true,
      expires: new Date(Date.now() + 1200000),
    });

    return res.status(200).json({
      status: "success",
      username, id
      //TODO: Send user data too.
      //Only to render from frontend, don't expect good input from user.
    });
  });
};

export const refreshToken = (req: Request, res: Response) => {
  const { refToken } = req.cookies;

  if (!refToken) {
    return res.status(401).json({
      status: "fail",
      message: "Token not provided.",
    });
  }
  jwt.verify(refToken, process.env.REFRESHJWTSECRET!, (err: any, user: any) => {
    if (err) {
      return res.status(403).json({
        status: "fail",
        message: "Invalid token.",
      });
    }

    const accessToken = jwt.sign(
      { username: user.username },
      process.env.JWTSECRET!,
      {
        expiresIn: "20m",
      }
    );

    res.clearCookie("token");
    res.cookie("token", accessToken, {
      expires: new Date(Date.now() + 1200000),
    });

    res.json({
      status: "success",
      // body: { accessToken },
    });
  });
};

export const registerUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      status: "fail",
      message: "Incomplete Request",
    });
  }

  const user = await getUserByUsername(username);
  if (user.rowCount == 1) {
    return res.status(406).json({
      status: "fail",
      message: "Username already taken",
    });
  }

  //rowCount == 1 but rows are 0 and command == "INSERT" for this query.
  const insertedUser = await register({ username, password });

  return res.status(201).json({
    status: "success",
    message: "User Created Succesfully.",
  });
};

export const logoutUser = async (req: Request, res: Response) => {
  res.clearCookie("token");
  res.clearCookie("refToken");

  res.json({
    status: "success",
    message: "logout done."
  })
}