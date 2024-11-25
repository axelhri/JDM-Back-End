import styles from "../CSS/contact.module.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = {
      nom: event.target[0].value,
      prenom: event.target[1].value,
      email: event.target[2].value,
      telephone: event.target[3].value,
      message: event.target[4].value,
    };

    fetch("https://jdm-back-end-kvxh.onrender.com/api/v1/emails/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          toast.success("Message envoyé avec succés !");
        } else {
          toast.error("Erreur lors de l'envoi");
        }
      })
      .catch((error) => {
        console.error("Erreur:", error);
        toast.error("Erreur de connexion au serveur");
      });
  }

  return (
    <section id={styles.contact}>
      <h5>Contactez-nous</h5>
      <div className={styles.formMap}>
        <form onSubmit={handleSubmit}>
          <span>Envoyez-nous un message</span>
          <div className={styles.nameContainer}>
            <div className={styles.formRow}>
              <input type="text" placeholder="Nom*" required />
            </div>
            <div className={styles.formRow}>
              <input type="text" placeholder="Prénom" />
            </div>
          </div>
          <div className={styles.formRow}>
            <input type="email" placeholder="E-mail*" required />
          </div>
          <div className={styles.formRow}>
            <input type="tel" id="phone" name="phone" placeholder="Téléphone" />
          </div>
          <div className={styles.formMsg}>
            <label htmlFor="formmsg">Message *</label>
            <textarea
              name="formmsg"
              placeholder="Votre message"
              required
            ></textarea>
          </div>
          <div className={styles.submitBtn}>
            <button type="submit">Envoyer</button>
          </div>
        </form>

        <div className={styles.mapContainer}>
          <span>Localisation</span>
          <address>263 Rue André Bracq, Vendegies-sur-Écaillon.</address>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2550.7911734093295!2d3.4988750769231047!3d50.258484401166804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c292f9ef4d3141%3A0x619447fae7a30ffb!2s263%20Rue%20Andr%C3%A9%20Bracq%2C%2059213%20Vendegies-sur-%C3%89caillon!5e0!3m2!1sen!2sfr!4v1732290980483!5m2!1sen!2sfr"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;
