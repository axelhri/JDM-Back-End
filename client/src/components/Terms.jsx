import styles from "../CSS/footer.module.css";

function Terms() {
  return (
    <div className={styles.termsContainer}>
      <h6>Politique de confidentialité</h6>
      <div className={styles.termsCard}>
        <span>1. Informations collectées</span>
        <p>
          Lorsque vous utilisez notre formulaire de contact, nous recueillons
          les informations suivantes :
        </p>
        <ul>
          <li>Nom</li>
          <li>Prénom</li>
          <li>Adresse e-mail (facultatif)</li>
          <li>Numéro de téléphone (facultatif)</li>
          <li>Message</li>
        </ul>
        <p>
          Ces informations sont collectées uniquement dans le but de répondre à
          vos demandes et de traiter vos requêtes. Nous ne collectons aucune
          autre donnée sans votre consentement.
        </p>
      </div>
      <div className={styles.termsCard}>
        <span>2. Utilisation des données</span>
        <p>
          Les données collectées via le formulaire de contact sont utilisées
          uniquement pour :
        </p>
        <ul>
          <li>
            Les données collectées via le formulaire de contact sont utilisées
            uniquement pour :
          </li>
          <li>
            Vous contacter en cas de besoin pour préciser ou compléter votre
            demande.
          </li>
        </ul>
        <p>
          Nous ne partageons, ni ne revendons, vos données à des tiers à des
          fins commerciales.
        </p>
      </div>

      <div className={styles.termsCard}>
        <span>3. Conservation des données</span>
        <p>
          Nous conservons vos données personnelles uniquement pendant la durée
          nécessaire pour répondre à votre demande, ou selon la durée légale de
          conservation des données. Une fois cette période écoulée, vos données
          seront supprimées de nos systèmes.
        </p>
      </div>

      <div className={styles.termsCard}>
        <span>4. Sécurité des données</span>
        <p>
          Nous mettons en œuvre des mesures de sécurité appropriées pour
          protéger vos données personnelles contre toute perte, accès non
          autorisé, divulgation, altération ou destruction. Cependant, aucun
          moyen de transmission sur Internet n&apos;est totalement sécurisé, et
          bien que nous nous efforçons de protéger vos données, nous ne pouvons
          garantir leur sécurité absolue.
        </p>
      </div>

      <div className={styles.termsCard}>
        <span>5. Contact</span>
        <p>
          Si vous avez des questions concernant cette politique de
          confidentialité ou sur la manière dont vos données personnelles sont
          traitées, n&apos;hésitez pas à nous contacter à l&apos;adresse
          suivante : lesjardinsdemagotte@gmail.com
        </p>
      </div>
      <div className={styles.backHome}>
        <a href="/">Retour vers l&apos;acceuil</a>
      </div>
    </div>
  );
}

export default Terms;
