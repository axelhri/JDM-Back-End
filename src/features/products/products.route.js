import express from "express";
import * as productsController from "./products.controller.js";
import { ProductsArraySchema } from "./products.schema.js";
import validate from "../../middlewares/validation.middleware.js";
import authMiddleware from "../../middlewares/auth.middleware.js";

const router = express.Router();

router
  .route("/")
  .post(
    authMiddleware,
    validate({ bodySchema: ProductsArraySchema }),
    productsController.create
  );

router.route("/").get(productsController.get);

export default router;
