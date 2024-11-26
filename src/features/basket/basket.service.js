import baskets from "./basket.model.js";

/**
 * Crée ou met à jour un panier avec plusieurs produits et un prix global.
 * @param {Array} data - Un tableau d'objets contenant les données des produits.
 * @param {Number} price - Le prix global du panier.
 * @param {string} userId - L'ID de l'utilisateur créant le panier.
 * @returns {Promise<Object>} Le document utilisateur mis à jour avec les nouveaux produits.
 */
const createMultiple = async (data, price, userId) => {
  const existingDocument = await baskets.findOne({ createdBy: userId });

  if (!existingDocument) {
    const newBasketDocument = new baskets({
      baskets: data,
      price: price,
      createdBy: userId,
    });
    return newBasketDocument.save();
  }

  existingDocument.baskets = data;
  existingDocument.price = price;
  return existingDocument.save();
};

/**
 * Récupère tous les produits disponibles dans le système.
 * @returns {Promise<Array>} Le tableau de tous les produits.
 */
const getAllBaskets = async () => {
  try {
    const allBasketsDocument = await baskets.find({});

    return allBasketsDocument.map((doc) => ({
      baskets: doc.baskets,
      price: doc.price,
    }));
  } catch (error) {
    throw new Error("Erreur lors de la récupération des produits.");
  }
};

export { createMultiple, getAllBaskets };
