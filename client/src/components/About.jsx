import styles from "../CSS/about.module.css";
import aboutImg1 from "../images/img1.jpg";
import aboutImg2 from "../images/img3.jpg";
import bgleaf1 from "../images/bgleaf3.png";
import bgleaf2 from "../images/bgleaf2.png";

function About() {
  return (
    <section id={styles.about}>
      <img src={bgleaf1} alt="" className={styles.bgleaf1} />
      <img src={bgleaf2} alt="" className={styles.bgleaf2} />
      <h2>À propos de nous</h2>
      <article>
        <div className={styles.aboutText}>
          <p>
            Au cœur de nos terres, nous cultivons avec soin et respect la
            richesse que la nature nous offre. Chaque saison nous rappelle
            l&apos;importance de travailler en harmonie avec
            l&apos;environnement pour obtenir des produits frais et pleins de
            saveurs. Grâce aux méthodes biologiques, nos sols sont vivants et en
            bonne santé, et nos cultures en profitent. Chez aux Jardins de
            Magotte, nous croyons que la qualité commence dans la terre et dans
            chaque geste que nous y mettons.
          </p>
        </div>
        <div className={styles.aboutImg}>
          <img src={aboutImg1} alt="" style={{ filter: "brightness(0.9)" }} />
        </div>
      </article>

      <article>
        <div className={styles.aboutText}>
          <p>
            Derrière chaque légume, il y a une équipe de passionnés qui
            s&apos;investit chaque jour pour cultiver des produits
            d&apos;exception. De la préparation des sols à la récolte, chaque
            étape est réalisée avec attention et savoir-faire. Notre engagement
            va bien au-delà de la culture biologique : il s&apos;agit pour nous
            de préserver l&apos;authenticité et la fraîcheur des saveurs tout en
            respectant la biodiversité et l&apos;écosystème de nos terres.
          </p>
        </div>
        <div className={styles.aboutImg}>
          <img src={aboutImg2} alt="" style={{ filter: "brightness(0.8)" }} />
        </div>
      </article>
    </section>
  );
}

export default About;
