import { z } from "zod";

const BasketBodySchema = z.object({
  name: z.string().trim().min(1, { message: "Le nom est requis" }),
  quantity: z
    .number()
    .min(0, { message: "Le nombre doit être un nombre positif" }),
});

const BasketsArraySchema = z.array(BasketBodySchema);

const CreateBasketSchema = z.object({
  baskets: BasketsArraySchema,
  price: z.number().min(0, { message: "Le prix global doit être positif" }),
});

export { CreateBasketSchema };
