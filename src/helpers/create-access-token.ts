import jwt from "jsonwebtoken";
import config from "../config";

const createAccessToken = (payload: any) => {
  return jwt.sign(payload, config.jwt.secretKey, {
    expiresIn: "5d"
  });
};
export default createAccessToken;
