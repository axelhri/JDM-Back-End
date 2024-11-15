import jwt from 'jsonwebtoken';

// Fonction pour vérifier un jeton JWT
// token: le jeton JWT à vérifier
const verifyJWT = (token) => {
  // Vérifier le jeton en utilisant le secret JWT stocké dans les variables d'environnement
  return jwt.verify(token, process.env.JWT_SECRET);
};

export { verifyJWT };
