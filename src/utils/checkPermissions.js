import { UnauthorizedError } from '../errors/index.js';

// Fonction pour vérifier les permissions d'accès
// requestUser: l'utilisateur qui fait la demande
// ressourceUserId: l'identifiant de l'utilisateur de la ressource
const checkPermissions = (requestUser, ressourceUserId) => {
  // Si l'identifiant de l'utilisateur de la demande ne correspond pas à celui de la ressource
  if (requestUser.userId !== ressourceUserId.toString())
    // Lancer une erreur d'accès non autorisé
    throw new UnauthorizedError('Accès à cette route non autorisé');
};

export { checkPermissions };
