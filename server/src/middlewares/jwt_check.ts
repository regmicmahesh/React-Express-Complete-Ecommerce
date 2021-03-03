import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { refreshToken } from "../controllers/UserController";


const check_validity_of_refresh_token = () => {

}

export const is_jwt_authenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.token || "";

 

  const JWTSECRET = process.env.JWTSECRET!;

  jwt.verify(token, JWTSECRET, (err: any, decoded: any) => {
    if (err) {
      refreshToken(req, res);
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
