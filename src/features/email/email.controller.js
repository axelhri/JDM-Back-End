import { Resend } from "resend";

// Initialiser Resend avec votre clé API
const resend = new Resend("re_dZKHDXKe_8aqaTQMVD8ZsMYBV5opd9QvM");

const sendEmail = async (req, res) => {
  // Récupérer les données de la requête
  const { nom, prenom, email, telephone, message } = req.body;

  // Validation des champs requis
  if (!nom || !email || !message) {
    return res
      .status(400)
      .json({ error: "Tous les champs obligatoires doivent être fournis." });
  }

  try {
    // Envoyer l'email
    const { data } = await resend.emails.send({
      from: "Contact : Les Jardins de Magotte <onboarding@resend.dev>", // Mettre un email valide associé à votre domaine Resend
      to: "lesjardinsdemagotte@gmail.com", // Envoyer au destinataire spécifié
      subject: "Nouveau message reçue", // Objet du mail
      text: `
        Nom: ${nom}
        Prénom: ${prenom || "Prénom non fourni"}
        Email: ${email}
        Téléphone: ${telephone || "Téléphone non fourni"}
        Message: ${message}
      `,
    });

    // Répondre avec succès
    res.status(200).json({ data });
  } catch (error) {
    // Gérer les erreurs
    res.status(500).json({ error: error.message });
  }
};

export default sendEmail;
