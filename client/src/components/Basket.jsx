import styles from "../CSS/basket.module.css";
import axios from "axios";
import basketImg from "../images/basket.png";
import { useEffect, useState } from "react";
import basketImg1 from "../images/basket1.jpg";
import basketImg2 from "../images/basket2.jpg";
import basketImg3 from "../images/basket3.jpg";
import basketImg4 from "../images/basket4.jpg";
import basketImg5 from "../images/basket5.jpg";
import basketImg6 from "../images/basket6.jpg";

function Basket() {
  const [basket, setBasket] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jdm-back-end-kvxh.onrender.com/api/v1/basket")
      .then((response) => {
        setBasket(response.data.baskets);
      })
      .catch((err) => {
        setError("Erreur lors de la récupération des paniers");
        console.error(err);
      });
  }, []);

  return (
    <section id={styles.basket}>
      <h4>Nos paniers</h4>
      <div className={styles.basketContainer}>
        <p className={styles.weeklyBasket}>Panier de la semaine :</p>
        <article>
          <div className={styles.basketImg}>
            <img src={basketImg} alt="Image du panier" />
          </div>
          <div>
            {error && <p className={styles.error}>{error}</p>}

            {basket ? (
              basket.map((item, index) => (
                <div key={index} className={styles.basketItem}>
                  <ul className={styles.basketList}>
                    {item.baskets.map((product, idx) => (
                      <li key={idx}>
                        {product.quantity} {product.name}
                      </li>
                    ))}
                  </ul>

                  <p className={styles.basketPrice}>
                    Prix du panier : {item.price}€
                  </p>
                </div>
              ))
            ) : (
              <p>Aucun panier disponible.</p>
            )}
          </div>
        </article>
      </div>

      <div className={styles.otherBaskets}>
        <p>
          Nous avons d&apos;autres paniers disponible tout au long de
          l&apos;année n&apos;hésitez pas a nous suivre sur notre{" "}
          <a href="https://www.facebook.com/FermierMagotte" target="_blank">
            facebook
          </a>{" "}
          pour en savoir plus.
        </p>
        <div className={styles.basketImgsContainer}>
          <div className={styles.basketImgBox}>
            <img src={basketImg1} alt="" />
          </div>
          <div className={styles.basketImgBox}>
            <img src={basketImg2} alt="" />
          </div>
          <div className={styles.basketImgBox}>
            <img src={basketImg3} alt="" />
          </div>
          <div className={styles.basketImgBox}>
            <img src={basketImg4} alt="" />
          </div>
          <div className={styles.basketImgBox}>
            <img src={basketImg5} alt="" />
          </div>
          <div className={styles.basketImgBox}>
            <img src={basketImg6} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Basket;
