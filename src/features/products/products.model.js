import mongoose, { model, Schema } from "mongoose";

const ProductSchema = new Schema(
  {
    products: [
      {
        name: {
          type: String,
          required: [true, "Veuillez fournir un nom"],
          maxlength: 50,
        },
        price: {
          type: Number,
          required: [true, "Veuillez fournir un prix"],
          min: [0, "Le prix doit être positif"],
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Veuillez fournir un utilisateur"],
      unique: true, // Un seul document par utilisateur
    },
  },
  { timestamps: true }
);

export default model("Product", ProductSchema);
