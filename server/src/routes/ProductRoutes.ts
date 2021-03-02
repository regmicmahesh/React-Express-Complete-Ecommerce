import { Router } from "express";
import {
  getAllProducts,
  getSingleProduct,
} from "../controllers/ProductController";
import { getAll } from "../db/Product";
import { is_jwt_authenticated } from "../middlewares/jwt_check";

const router = Router();

//TESTING JWT MIDDLEWARE
//router.use(is_jwt_authenticated);

router.route("/all").get(getAllProducts);
router.route("/details/:id").get(getSingleProduct);

export default router;
