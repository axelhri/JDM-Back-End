import "dotenv/config";
import "express-async-errors";
import express from "express";
import helmet from "helmet";
import { rateLimit } from "express-rate-limit";
import mongoSanitize from "express-mongo-sanitize";
import cors from "cors";
import YAML from "yamljs";
import connectDB from "./config/db.config.js";
import authenticateUser from "./middlewares/auth.middleware.js";
import errorHandler from "./middlewares/error-handler.js";
import notFound from "./middlewares/not-found.middleware.js";
import { auth } from "./features/auth/index.js";
import { products } from "./features/products/index.js";
import { baskets } from "./features/basket/index.js";
import { StatusCodes } from "http-status-codes";

const app = express();

app.use(helmet());
app.set("trust proxy", 1);
// app.use(
//   rateLimit({
//     windowMs: 15 * 60 * 1000, // 15 minutes
//     limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
//     standardHeaders: "draft-7", // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
//     legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
//     // store: ... , // Redis, Memcached, etc. See below.
//   })
// );
app.use(mongoSanitize());
app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (_req, res) => {
  res
    .status(StatusCodes.OK)
    .send("<h1>API JOBS</h1><a href='/api-docs'>Documentation</a>");
});

app.use("/api/v1/auth", auth);
app.use("/api/v1/products", products);
app.use("/api/v1/basket", baskets);

app.use(notFound);
app.use(errorHandler);

export default app;
