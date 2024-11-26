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
    const updatedBasketDocument = await basketService.createMultiple(
      baskets,
      price,
      req.user.userId
    );

    res.status(StatusCodes.CREATED).json({
      baskets: updatedBasketDocument.baskets,
      price: updatedBasketDocument.price,
    });
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
    const allBaskets = await basketService.getAllBaskets();

    const response = allBaskets.map((basket) => ({
      baskets: basket.baskets,
      price: basket.price,
    }));

    res.status(StatusCodes.OK).json({ baskets: response });
  } catch (error) {
    res.status(StatusCodes.NOT_FOUND).json({ message: error.message });
  }
};

export { create, get };
