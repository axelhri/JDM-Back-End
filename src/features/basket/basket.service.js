import baskets from "./basket.model.js";

/**
 * Crée ou met à jour un panier avec plusieurs produits et un prix global.
 * @param {Array} data - Un tableau d'objets contenant les données des produits.
 * @param {Number} price - Le prix global du panier.
 * @param {string} userId - L'ID de l'utilisateur créant le panier.
 * @returns {Promise<Object>} Le document utilisateur mis à jour avec les nouveaux produits.
 */
const createMultiple = async (data, price, userId) => {
  // Vérifie si un document existe déjà pour cet utilisateur
  const existingDocument = await baskets.findOne({ createdBy: userId });

  if (!existingDocument) {
    // Si aucun panier n'existe, crée un nouveau document
    const newBasketDocument = new baskets({
      baskets: data, // Remplacer complètement les produits existants par le nouveau tableau
      price: price,
      createdBy: userId,
    });
    return newBasketDocument.save();
  }

  // Sinon, remplace les produits existants par les nouveaux produits et met à jour le prix
  existingDocument.baskets = data; // Remplacer l'ancien tableau par le nouveau
  existingDocument.price = price; // Met à jour le prix du panier
  return existingDocument.save();
};

/**
 * Récupère tous les produits disponibles dans le système.
 * @returns {Promise<Array>} Le tableau de tous les produits.
 */
const getAllBaskets = async () => {
  try {
    // Récupère tous les paniers, sans tenir compte de l'utilisateur
    const allBasketsDocument = await baskets.find({});
    return allBasketsDocument.map((doc) => doc.baskets).flat();
  } catch (error) {
    throw new Error("Erreur lors de la récupération des produits.");
  }
};

export { createMultiple, getAllBaskets };
