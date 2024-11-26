import express from "express";
import * as basketsController from "./basket.controller.js";
import { CreateBasketSchema } from "./basket.schema.js";
import validate from "../../middlewares/validation.middleware.js";
import authMiddleware from "../../middlewares/auth.middleware.js";

const router = express.Router();

router
  .route("/")
  .post(
    authMiddleware,
    validate({ bodySchema: CreateBasketSchema }),
    basketsController.create
  );

router.route("/").get(basketsController.get);

export default router;
