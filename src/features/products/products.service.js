import products from "./products.model.js";

/**
 * Remplace les produits existants par un nouveau tableau de produits.
 * @param {Array} data - Un tableau d'objets contenant les données des produits.
 * @param {string} userId - L'ID de l'utilisateur créant les produits.
 * @returns {Promise<Object>} Le document utilisateur mis à jour avec les nouveaux produits.
 */
const createMultiple = async (data, userId) => {
  const existingDocument = await products.findOne({ createdBy: userId });

  if (!existingDocument) {
    const newProductDocument = new products({
      products: data,
      createdBy: userId,
    });
    return newProductDocument.save();
  }

  existingDocument.products = data;
  return existingDocument.save();
};

/**
 * Récupère les produits pour un utilisateur donné.
 * @param {string} userId - L'ID de l'utilisateur dont on souhaite récupérer les produits.
 * @returns {Promise<Object>} Le tableau de produits de l'utilisateur.
 */
const getProducts = async (userId) => {
  const userProducts = await products.findOne({ createdBy: userId });

  if (!userProducts) {
    throw new Error("Aucun produit trouvé pour cet utilisateur.");
  }

  return userProducts.products;
};

/**
 * Récupère tous les produits disponibles dans le système.
 * @returns {Promise<Array>} Le tableau de tous les produits.
 */
const getAllProducts = async () => {
  try {
    const allProductsDocument = await products.find({});
    return allProductsDocument.map((doc) => doc.products).flat();
  } catch (error) {
    throw new Error("Erreur lors de la récupération des produits.");
  }
};

export { createMultiple, getProducts, getAllProducts };
