import { Request } from "express";
import jwt from "jsonwebtoken";
import config from "../config";
import asyncHandler from "../helpers/async-handler";
import getBearerToken from "../helpers/get-bearer-token";
import User from "../models/user.model";
import createHttpError from "http-errors";

const requireAuth = asyncHandler(async (req: Request, _, next) => {
  let user;
  const accessToken = getBearerToken(req);
  if (!accessToken) throw createHttpError(422);
  console.log("sdfsdfsdfsdf");
  const payload = jwt.verify(accessToken, config.jwt.secretKey);
  const userId = (payload as any).id;
  user = await User.findById(userId);
  (req as any).user = user;
  next();
});

export default requireAuth;
