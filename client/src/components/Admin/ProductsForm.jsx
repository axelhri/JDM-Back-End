import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../../CSS/dashboard.module.css";

function ProductsForm() {
  const [products, setProducts] = useState([{ name: "", price: 0 }]);

  const addProduct = () => {
    setProducts([...products, { name: "", price: 0 }]);
  };

  const removeProduct = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  const handleChange = (index, key, value) => {
    const updatedProducts = [...products];
    updatedProducts[index][key] = value;
    setProducts(updatedProducts);
  };

  const handleSendProducts = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Aucun token trouvé. Veuillez vous connecter.");
      }

      const response = await axios.post(
        "https://jdm-back-end-kvxh.onrender.com/api/v1/products",
        products,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      toast.success("Produits créés avec succès !");
    } catch (error) {
      toast.error("Erreur lors de l'envoi des produits");
    }
  };

  return (
    <section className={styles.dashboardSection}>
      <ToastContainer position="top-right" autoClose={3000} />
      <form>
        <h2>Produits de saison</h2>
        {products.map((product, index) => (
          <div key={index} className={styles.productRow}>
            <input
              type="text"
              placeholder="Nom du produit"
              value={product.name}
              onChange={(e) => handleChange(index, "name", e.target.value)}
              className={styles.inputField}
            />
            <label htmlFor="number">Prix</label>
            <input
              type="number"
              name="number"
              placeholder="0"
              value={product.price}
              onFocus={(e) => (e.target.value = "")}
              onChange={(e) =>
                handleChange(index, "price", parseFloat(e.target.value) || 0)
              }
              className={styles.inputField}
            />
            {products.length > 0 && (
              <button
                type="button"
                onClick={() => removeProduct(index)}
                className={styles.removeButton}
              >
                <i className="fa-solid fa-trash-can"></i>
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={addProduct} className={styles.addButton}>
          <i className="fa-solid fa-plus"></i> Ajouter un produit
        </button>
        <button
          type="button"
          onClick={handleSendProducts}
          className={styles.submitButton}
        >
          Envoyer
        </button>
      </form>
    </section>
  );
}

export default ProductsForm;
