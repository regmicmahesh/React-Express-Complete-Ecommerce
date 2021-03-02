import { Router } from "express";
import {
  loginUser,
  logoutUser,
  refreshToken,
  registerUser,
} from "../controllers/UserController";

const router = Router();

router.route("/login").post(loginUser);
router.route("/refresh").post(refreshToken);
router.route("/register").post(registerUser);
router.route("/logout").all(logoutUser);

export default router;
