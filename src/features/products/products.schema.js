import { z } from "zod";

// Schéma de validation pour un produit
const ProductBodySchema = z.object({
  name: z.string().trim().min(1, { message: "Le nom est requis" }),
  price: z.number().min(0, { message: "Le prix doit être un nombre positif" }),
});

// Schéma de validation pour un tableau de produits
const ProductsArraySchema = z.array(ProductBodySchema);

export { ProductsArraySchema };
