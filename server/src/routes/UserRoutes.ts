import { Router } from "express";
import {
  loginUser,
  refreshToken,
  registerUser,
} from "../controllers/UserController";

const router = Router();

router.route("/login").post(loginUser);
router.route("/refresh").post(refreshToken);
router.route("/register").post(registerUser);

export default router;
