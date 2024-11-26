import { StatusCodes } from "http-status-codes";
import * as productService from "./products.service.js";

/**
 * Crée plusieurs produits et les associe à un utilisateur.
 * @param {Object} req - La requête contenant les produits.
 * @param {Object} res - La réponse qui contiendra les produits créés.
 */
const create = async (req, res) => {
  const products = req.body;

  try {
    const updatedProductDocument = await productService.createMultiple(
      products,
      req.user.userId
    );
    res
      .status(StatusCodes.CREATED)
      .json({ products: updatedProductDocument.products });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
  }
};

/**
 * Récupère tous les produits, avec ou sans utilisateur connecté.
 * @param {Object} req - La requête (peut contenir des informations d'utilisateur si connecté).
 * @param {Object} res - La réponse qui contiendra les produits.
 */
const get = async (req, res) => {
  try {
    const allProducts = await productService.getAllProducts();
    res.status(StatusCodes.OK).json({ products: allProducts });
  } catch (error) {
    res.status(StatusCodes.NOT_FOUND).json({ message: error.message });
  }
};

export { create, get };
