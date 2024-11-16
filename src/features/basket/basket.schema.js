import { z } from "zod";

// Schéma de validation pour un produit
const BasketBodySchema = z.object({
  name: z.string().trim().min(1, { message: "Le nom est requis" }),
  // Vous pouvez ajouter d'autres champs pour chaque produit
});

// Schéma de validation pour un tableau de produits
const BasketsArraySchema = z.array(BasketBodySchema);

// Schéma pour la requête de création de panier, avec un prix global
const CreateBasketSchema = z.object({
  baskets: BasketsArraySchema,
  price: z.number().min(0, { message: "Le prix global doit être positif" }),
});

export { CreateBasketSchema };
