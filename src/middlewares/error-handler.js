import { StatusCodes } from 'http-status-codes';

const errorHandler = (err, _req, res, _next) => {
  const msg =
    err.message ||
    "Une erreur s'est produite, veuillez réessayer plus tard";
  const statusCode =
    err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;

  if (err.code && err.code === 11000) {
    customError.msg = `La valeur existe déjà pour le champ ${Object.keys(
      err.keyValue
    )}`;
    customError.statusCode = 400;
  }

  res.status(statusCode).json({ msg });
};

export default errorHandler;
