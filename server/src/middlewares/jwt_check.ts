import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const is_jwt_authenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(400).json({
      status: "fail",
      message: "no authentication found.",
    });
  }

  const JWTSECRET = process.env.JWTSECRET!;

  jwt.verify(token, JWTSECRET, (err: any, decoded: any) => {
    if (err) {
      return res.status(401).json({
        status: "fail",
        message: "improper token",
      });
    } else {
      (req as any).user = decoded;
      next();
    }
  });
};
