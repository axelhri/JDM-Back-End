import { useState } from "react";
import styles from "../CSS/navbar.module.css";
import { useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add(styles.noScroll);
    } else {
      document.body.classList.remove(styles.noScroll);
    }

    return () => {
      document.body.classList.remove(styles.noScroll);
    };
  }, [isOpen]);

  return (
    <nav id="nav">
      <header>
        <div className={styles.navContainer}>
          <div
            className={`${styles.logoContainer} ${
              isOpen ? styles.active : styles.notActive
            }`}
          >
            <a href="#Navbar">Les Jardins de Magotte</a>
          </div>
          <div
            className={`${styles.linksContainer} ${
              isOpen ? styles.active : styles.notActive
            }`}
          >
            <ul>
              <li>
                <a href="#aboutSection">À propos</a>
              </li>
              <li>
                <a href="#productsSection">Nos produits</a>
              </li>
              <li>
                <a href="#basketSection">Nos paniers</a>
              </li>
              <li>
                <a href="#contactSection">Contact</a>
              </li>
            </ul>
          </div>

          <div className={styles.burgerMenu}>
            <div
              className={styles.burgerContainer}
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <div
                className={`${styles.burgerBar} ${styles.topBar} ${
                  isOpen ? styles.open : ""
                }`}
              ></div>
              <div
                className={`${styles.burgerBar} ${styles.middleBar} ${
                  isOpen ? styles.open : ""
                }`}
              ></div>
              <div
                className={`${styles.burgerBar} ${styles.bottomBar} ${
                  isOpen ? styles.open : ""
                }`}
              ></div>
            </div>
          </div>

          <div className={styles.navSocial}>
            <a href="https://www.facebook.com/FermierMagotte" target="_blank">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
        </div>
      </header>
    </nav>
  );
}

export default Navbar;
