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
        // Vous pouvez ajouter d'autres champs pour chaque produit si nécessaire
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
      unique: true, // Un seul document par utilisateur
    },
  },
  { timestamps: true }
);

export default model("Basket", BasketSchema);
