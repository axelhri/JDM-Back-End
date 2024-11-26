import { Resend } from "resend";

const resend = new Resend("re_dZKHDXKe_8aqaTQMVD8ZsMYBV5opd9QvM");

const sendEmail = async (req, res) => {
  const { nom, prenom, email, telephone, message } = req.body;

  if (!nom || !email || !message) {
    return res
      .status(400)
      .json({ error: "Tous les champs obligatoires doivent être fournis." });
  }

  try {
    const { data } = await resend.emails.send({
      from: "Contact : Les Jardins de Magotte <onboarding@resend.dev>",
      to: "lesjardinsdemagotte@gmail.com",
      subject: "Nouveau message reçue",
      text: `
        Nom: ${nom}
        Prénom: ${prenom || "Prénom non fourni"}
        Email: ${email}
        Téléphone: ${telephone || "Téléphone non fourni"}
        Message: ${message}
      `,
    });

    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default sendEmail;
