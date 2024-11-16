import { StatusCodes } from "http-status-codes";
import * as basketService from "./basket.service.js";

/**
 * Crée plusieurs produits et les associe à un utilisateur.
 * @param {Object} req - La requête contenant les produits et le prix.
 * @param {Object} res - La réponse qui contiendra le panier créé.
 */
const create = async (req, res) => {
  const { baskets, price } = req.body;

  try {
    // Crée ou met à jour le panier avec les produits et le prix global
    const updatedBasketDocument = await basketService.createMultiple(
      baskets,
      price,
      req.user.userId
    );
    res
      .status(StatusCodes.CREATED)
      .json({ baskets: updatedBasketDocument.baskets });
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
    // Récupère tous les produits disponibles dans le système
    const allBaskets = await basketService.getAllBaskets();
    res.status(StatusCodes.OK).json({ products: allBaskets });
  } catch (error) {
    res.status(StatusCodes.NOT_FOUND).json({ message: error.message });
  }
};

export { create, get };
