import express from "express";
import dotenv from "dotenv";
import config from "./src/config/index";
import loaders from "./loaders";

dotenv.config();

const app = express();

const startServer = async () => {
  try {
    await loaders(app);
    app.listen({ port: config.app.port, host: config.app.hostname });
    console.log("Server listening on port", config.app.port);
  } catch (error) {
    console.log("Failed to start the server.");
    console.log((error as Error).message);
  }
};
startServer();
