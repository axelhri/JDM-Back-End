import { z } from "zod";

const ProductBodySchema = z.object({
  name: z.string().trim().min(1, { message: "Le nom est requis" }),
  price: z.number().min(0, { message: "Le prix doit être un nombre positif" }),
});

const ProductsArraySchema = z.array(ProductBodySchema);

export { ProductsArraySchema };
