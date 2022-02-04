import dotenv from "dotenv";

dotenv.config();

const config = {
  app: {
    url: process.env.APP_URL || "http://localhost:5000",
    port: process.env.PORT || "5000",
    hostname: process.env.APP_HOSTNAME
  },
  database: {
    mongodb: {
      uri: process.env.MONGODB_URI || ""
    }
  },
  allowedOrigin: process.env.ALLOWED_ORIGIN || "http://localhost:3000",
  jwt: {
    secretKey: process.env.JWT_SECRET_KEY || "Amen"
  }
};

export default config;
