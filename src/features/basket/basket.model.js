import mongoose, { model, Schema } from "mongoose";

const BasketSchema = new Schema(
  {
    baskets: [
      {
        name: {
          type: String,
          required: [true, "Veuillez fournir un nom de produit"],
          maxlength: 50,
        },
        quantity: {
          type: Number,
          required: [true, "Veuillez fournir un nombre"],
          min: [0, "Le nombre doit être positif"],
        },
      },
    ],
    price: {
      type: Number,
      required: [true, "Veuillez fournir un prix global"],
      min: [0, "Le prix doit être positif"],
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Veuillez fournir un utilisateur"],
      unique: true,
    },
  },
  { timestamps: true }
);

export default model("Basket", BasketSchema);
