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

    // Retourne le panier et le prix dans la réponse
    res.status(StatusCodes.CREATED).json({
      baskets: updatedBasketDocument.baskets,
      price: updatedBasketDocument.price, // Ajoutez le prix ici
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
    // Récupère tous les paniers disponibles dans le système
    const allBaskets = await basketService.getAllBaskets();

    // Construire la réponse en incluant à la fois les produits et les prix
    const response = allBaskets.map((basket) => ({
      baskets: basket.baskets, // les produits du panier
      price: basket.price, // le prix global du panier
    }));

    res.status(StatusCodes.OK).json({ baskets: response });
  } catch (error) {
    res.status(StatusCodes.NOT_FOUND).json({ message: error.message });
  }
};

export { create, get };
