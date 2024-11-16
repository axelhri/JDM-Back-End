import express from "express";
import * as basketsController from "./basket.controller.js";
import { CreateBasketSchema } from "./basket.schema.js"; // Validation du corps de la requête
import validate from "../../middlewares/validation.middleware.js"; // Validation des requêtes
import authMiddleware from "../../middlewares/auth.middleware.js"; // Middleware d'authentification

const router = express.Router();

// Route POST pour créer des produits (requiert une authentification)
router.route("/").post(
  authMiddleware, // L'utilisateur doit être authentifié pour créer des produits
  validate({ bodySchema: CreateBasketSchema }),
  basketsController.create
);

// Route GET pour récupérer tous les produits (publique)
router.route("/").get(basketsController.get);

export default router;
