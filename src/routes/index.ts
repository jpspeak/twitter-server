import authRoutes from "./auth.routes";
import tweetRoutes from "./tweet.routes";
import { Express } from "express-serve-static-core";
import { Response } from "express";

const routes = (app: Express) => {
  app.use("/auth", authRoutes);
  app.use("/tweets", tweetRoutes);
  app.get("*", (_, res: Response) => {
    res.status(404).json({
      message: "Not Found"
    });
  });
};

export default routes;
