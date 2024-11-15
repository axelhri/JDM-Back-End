import express from "express";
import * as productsController from "./products.controller.js";
import { ProductsArraySchema } from "./products.schema.js"; // Validation du tableau de produits
import validate from "../../middlewares/validation.middleware.js"; // Validation des requêtes
import authMiddleware from "../../middlewares/auth.middleware.js"; // Middleware d'authentification

const router = express.Router();

// Route POST pour créer des produits (requiert une authentification)
router.route("/").post(
  authMiddleware, // L'utilisateur doit être authentifié pour créer des produits
  validate({ bodySchema: ProductsArraySchema }),
  productsController.create
);

// Route GET pour récupérer tous les produits (publique)
router.route("/").get(productsController.get);

export default router;
