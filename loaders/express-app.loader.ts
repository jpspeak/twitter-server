import express, { Express } from "express";
import cors from "cors";
import config from "../src/config";
import errorHandler from "../src/middlewares/error-handler";
import routes from "../src/routes";

export default async (app: Express) => {
  app.use(express.json());

  //CORS POLICY
  app.use(cors({ origin: config.allowedOrigin }));

  // ROUTES
  routes(app);

  //ERROR HANDLER
  app.use(errorHandler);
};
