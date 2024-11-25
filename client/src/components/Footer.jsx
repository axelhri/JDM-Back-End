import styles from "../CSS/footer.module.css";
import footerImg from "../images/footerimg.png";

function Footer() {
  return (
    <footer id={styles.footer}>
      <img src={footerImg} alt="" className={styles.footerImg} />
      <div className={styles.footerContent}>
        <div className={styles.footerLinksContainer}>
          <ul className={styles.linksContainer}>
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

        <div className={styles.footerContact}>
          <p>
            <i className="fa-regular fa-envelope"></i>
            <a href="mailto:kebaert@gmail.com">kebaert@gmail.com</a>
          </p>
          <p>
            <i className="fa-solid fa-phone"></i>
            <span>06 33 67 30 22</span>
          </p>
          <address>
            263 rue Andre Bracq, Vendegies-sur-Écaillon, France.
          </address>
        </div>
        <div className={styles.socials}>
          <a href="https://www.facebook.com/FermierMagotte" target="_blank">
            <i className="fa-brands fa-facebook"></i>
            <p>Suivez-nous sur Facebook</p>
          </a>
        </div>
      </div>
      <div className={styles.terms}>
        <p>
          {" "}
          <a href="/terms">Politique de confidentialité</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
