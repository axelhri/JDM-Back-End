import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../../CSS/dashboard.module.css";

function BasketForm() {
  const [products, setProducts] = useState([{ name: "", quantity: 0 }]); // Ajout de quantity
  const [price, setPrice] = useState(0);

  const handleProductChange = (index, event) => {
    const newProducts = [...products];
    newProducts[index].name = event.target.value;
    setProducts(newProducts);
  };

  const handleQuantityChange = (index, event) => {
    const newProducts = [...products];
    newProducts[index].quantity = parseInt(event.target.value) || 0;
    setProducts(newProducts);
  };

  const handleAddProduct = () => {
    setProducts([...products, { name: "", quantity: 1 }]);
  };

  const handleRemoveProduct = (index) => {
    const newProducts = products.filter((_, i) => i !== index);
    setProducts(newProducts);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Token non trouvé. Veuillez vous connecter.");
      return;
    }

    const basketData = {
      baskets: products,
      price: parseFloat(price),
    };

    try {
      const response = await axios.post(
        "https://jdm-back-end-kvxh.onrender.com/api/v1/basket",
        basketData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Panier créé avec succès !");
    } catch (error) {
      toast.error("Erreur lors de la création du panier");
      console.error("Erreur :", error);
    }
  };

  return (
    <section className={styles.basketForm}>
      <ToastContainer position="top-right" autoClose={3000} />
      <form onSubmit={handleSubmit}>
        <h3>Panier du mois</h3>
        <div className={styles.formGroup}>
          {products.map((product, index) => (
            <div key={index} className={styles.productRow}>
              <input
                type="text"
                placeholder={`Produit ${index + 1}`}
                value={product.name}
                onChange={(e) => handleProductChange(index, e)}
                required
              />
              <input
                type="number"
                placeholder="0"
                onFocus={(e) => (e.target.value = "")}
                value={product.quantity}
                onChange={(e) => handleQuantityChange(index, e)}
                min="1"
                required
              />
              {products.length > 0 && (
                <button
                  type="button"
                  className={styles.removeButton}
                  onClick={() => handleRemoveProduct(index)}
                >
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            className={styles.addButton}
            onClick={handleAddProduct}
          >
            <i className="fa-solid fa-plus"></i> Ajouter un produit
          </button>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="price">Prix du panier (€)</label>
          <input
            type="number"
            id="price"
            placeholder="0"
            onFocus={(e) => (e.target.value = "")}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Créer le panier
        </button>
      </form>
      <div className={styles.backHome}>
        <a href="/">Retour vers l&apos;acceuil</a>
      </div>
    </section>
  );
}

export default BasketForm;
