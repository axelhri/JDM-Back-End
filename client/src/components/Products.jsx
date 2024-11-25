import { useState, useEffect } from "react";
import styles from "../CSS/products.module.css";
import Carousel1 from "../images/products/salade.jpg";
import Carousel2 from "../images/products/radis.jpg";
import Carousel3 from "../images/products/courge.jpg";
import Carousel4 from "../images/products/oignions.jpg";
import Carousel5 from "../images/products/kiwano.jpg";
import Carousel6 from "../images/products/choux.jpg";
import Carousel7 from "../images/products/feves.jpg";
import Carousel8 from "../images/products/tomate.jpg";
import Carousel9 from "../images/products/navets.jpg";
import Carousel10 from "../images/products/concombre.jpg";
import Carousel11 from "../images/products/poireaux.jpg";
import axios from "axios";

function Products() {
  const [carouselIndex, setCarouselIndex] = useState(
    Math.floor(Math.random() * 11)
  );
  const [isImageVisible, setIsImageVisible] = useState(true);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const carouselImages = [
    Carousel1,
    Carousel2,
    Carousel3,
    Carousel4,
    Carousel5,
    Carousel6,
    Carousel7,
    Carousel8,
    Carousel9,
    Carousel10,
    Carousel11,
  ];

  useEffect(() => {
    axios
      .get("https://jdm-back-end-kvxh.onrender.com/api/v1/products")
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((err) => {
        setError("Erreur lors de la récupération des produits");
        console.error(err);
      });
  }, []);

  const getUniqueIndices = (excludeIndex, currentMosaicIndices) => {
    const indices = new Set();
    while (indices.size < 4) {
      const randomIndex = Math.floor(Math.random() * carouselImages.length);
      if (
        randomIndex !== excludeIndex &&
        !currentMosaicIndices.includes(randomIndex)
      ) {
        indices.add(randomIndex);
      }
    }
    return Array.from(indices);
  };

  const [mosaicIndices, setMosaicIndices] = useState(
    getUniqueIndices(carouselIndex, [])
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setIsImageVisible(false);
      setTimeout(() => {
        setCarouselIndex((prevIndex) =>
          prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
        );
        setMosaicIndices((prevIndices) =>
          getUniqueIndices(carouselIndex, prevIndices)
        );
        setIsImageVisible(true);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselImages.length, carouselIndex]);

  return (
    <section id={styles.products}>
      <div className={styles.productsSection}>
        <h3>Nos produits</h3>
        <div className={styles.carousel}>
          <img
            src={carouselImages[carouselIndex]}
            alt={`Carousel image ${carouselIndex + 1}`}
            className={`${styles.carouselImage} ${
              isImageVisible ? styles.show : ""
            }`}
          />
        </div>

        <div className={styles.carouselMosaic}>
          <div className={styles.firstMosaicPart}>
            <div className={styles.mosaicImgBox}>
              <img
                src={carouselImages[mosaicIndices[0]]}
                alt={`Mosaic image 1`}
                className={`${styles.carouselImage} ${
                  isImageVisible ? styles.show : ""
                }`}
              />
            </div>
            <div className={styles.mosaicImgBox}>
              <img
                src={carouselImages[mosaicIndices[1]]}
                alt={`Mosaic image 2`}
                className={`${styles.carouselImage} ${
                  isImageVisible ? styles.show : ""
                }`}
              />
            </div>
          </div>
          <div className={styles.secondMosaicPart}>
            <div className={styles.mosaicImgBox}>
              <img
                src={carouselImages[mosaicIndices[2]]}
                alt={`Mosaic image 3`}
                className={`${styles.carouselImage} ${
                  isImageVisible ? styles.show : ""
                }`}
              />
            </div>
            <div className={styles.mosaicImgBox}>
              <img
                src={carouselImages[mosaicIndices[3]]}
                alt={`Mosaic image 4`}
                className={`${styles.carouselImage} ${
                  isImageVisible ? styles.show : ""
                }`}
              />
            </div>
          </div>
        </div>

        <div className={styles.productsContainer}>
          <div className={styles.productsTitle}>
            <span>Produits disponible toute l&apos;année</span>
          </div>
          <ul className={styles.productsList}>
            <li>
              <span className={styles.products}>Salades et Laitue :</span>
              <span className={styles.productsDesc}>
                Nos salades et laitues sont cultivées avec soin tout au long de
                l&apos;année pour apporter fraîcheur et croquant à vos
                assiettes. Idéales pour des salades variées ou comme garniture
                saine pour vos repas.
              </span>
            </li>
            <li>
              <span className={styles.products}>Mâche et Épinards :</span>
              <span className={styles.productsDesc}>
                Découvrez notre mâche tendre et nos épinards riches en
                nutriments. Parfaits pour des salades, des smoothies ou des
                plats cuits, ils apportent vitamines et goût intense à vos
                recettes.
              </span>
            </li>
            <li>
              <span className={styles.products}>
                Oignons (rouge et jaune) :
              </span>
              <span className={styles.productsDesc}>
                Nos oignons rouges et jaunes sont disponibles en toute saison,
                ajoutant un goût subtil ou relevé à vos plats. Qu&apos;ils
                soient crus, cuits ou confits, nos oignons s&apos;intègrent
                parfaitement à vos créations culinaires.
              </span>
            </li>
            <li>
              <span className={styles.products}>
                Fèves et Haricots (verts et blancs) :
              </span>
              <span className={styles.productsDesc}>
                Riches en fibres et en protéines, nos fèves et haricots,
                disponibles toute l&apos;année, sont idéals pour des plats
                équilibrés et gourmands. À consommer en salade, en purée ou en
                accompagnement.
              </span>
            </li>

            <li>
              <span className={styles.products}>Radis et Navets :</span>
              <span className={styles.productsDesc}>
                Croquants et légèrement piquants, nos radis et navets ajoutent
                de la couleur et de la fraîcheur à vos entrées et salades. Un
                choix parfait pour des recettes légères et savoureuses.
              </span>
            </li>

            <li>
              <span className={styles.products}>Choux (divers) :</span>
              <span className={styles.productsDesc}>
                De toutes les couleurs et saveurs, nos choux sont disponibles
                toute l&apos;année. Qu&apos;ils soient cuits ou crus, ils se
                prêtent à une variété de plats traditionnels et contemporains,
                de la soupe au wok.
              </span>
            </li>

            <li>
              <span className={styles.products}>
                Tomates et Tomates Cerises :
              </span>
              <span className={styles.productsDesc}>
                Nos tomates et tomates cerises mûrissent naturellement pour
                offrir une saveur intense et sucrée. Utilisez-les dans vos
                salades, sauces, et plats cuisinés pour une touche de soleil
                dans vos assiettes.
              </span>
            </li>

            <li>
              <span className={styles.products}>Poivrons et Aubergines :</span>
              <span className={styles.productsDesc}>
                Des poivrons colorés et des aubergines délicates, parfaits pour
                des recettes méditerranéennes et autres plats savoureux. Nos
                légumes sont cueillis à maturité pour une saveur optimale.
              </span>
            </li>

            <li>
              <span className={styles.products}>Petits Pois :</span>
              <span className={styles.productsDesc}>
                Nos petits pois sont doux et tendres, idéals pour des plats en
                sauce, des soupes ou des salades. Riches en nutriments, ils
                s&apos;associent facilement avec d&apos;autres légumes de
                saison.
              </span>
            </li>

            <li>
              <span className={styles.products}>
                Côtes de Blettes et Céleri Rave :
              </span>
              <span className={styles.productsDesc}>
                Nos côtes de blettes et céleri rave apportent texture et goût à
                vos plats. Polyvalents, ils peuvent être cuisinés de multiples
                façons : en gratin, en purée ou en accompagnement.
              </span>
            </li>

            <li>
              <span className={styles.products}>Poireaux :</span>
              <span className={styles.productsDesc}>
                Les poireaux sont parfaits pour des soupes, des quiches et des
                tartes. Leur goût doux et légèrement sucré enrichit toutes
                sortes de plats, des recettes simples aux plus sophistiquées.
              </span>
            </li>

            <li>
              <span className={styles.products}>Courges (diverses) :</span>
              <span className={styles.productsDesc}>
                Nos courges, du potiron au butternut, sont disponibles toute
                l&apos;année. Riches en saveurs et en couleurs, elles apportent
                une touche automnale à vos plats, même hors saison.
              </span>
            </li>

            <li>
              <span className={styles.products}>Kiwano :</span>
              <span className={styles.productsDesc}>
                Original et exotique, notre kiwano a une chair juteuse et
                rafraîchissante, idéale pour ajouter une touche unique et
                acidulée à vos salades de fruits et desserts.
              </span>
            </li>

            <li>
              <span className={styles.products}>Concombre :</span>
              <span className={styles.productsDesc}>
                Croquant et rafraîchissant, notre concombre est parfait pour des
                salades, des snacks ou des eaux aromatisées. Un indispensable de
                vos repas, toute l&apos;année.
              </span>
            </li>
          </ul>
        </div>

        <div className={styles.prices}>
          <div className={styles.sznKeyframes}>
            <span className={styles.pricesContainerTitle}>
              Produits de cette saison
            </span>
          </div>
          <div className={styles.seasonalProducts}>
            <ul className={styles.seasonalList}>
              {products.length > 0 ? (
                products.map((product, index) => (
                  <li key={index}>
                    <p>{product.name}</p>
                    <span>
                      {parseFloat(product.price).toFixed(2).replace(".", ",")}{" "}
                      <span
                        style={{
                          color: "rgb(253, 213, 80)",
                          fontWeight: 200,
                          fontSize: "1.3rem",
                        }}
                      >
                        €
                      </span>
                    </span>
                  </li>
                ))
              ) : (
                <p>Aucun produit disponible.</p>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
