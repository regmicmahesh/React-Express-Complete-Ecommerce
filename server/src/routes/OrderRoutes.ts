import { Router } from "express";
import {
  addSingleOrderController,
  getOrderStatusController,
} from "../controllers/OrderController";
import { is_jwt_authenticated } from "../middlewares/jwt_check";

const router = Router();

router.use(is_jwt_authenticated);

router.route("/").post(addSingleOrderController);
router.route("/status/:code").get(getOrderStatusController);

export default router;
