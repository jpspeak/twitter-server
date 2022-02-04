import createHttpError from "http-errors";
import asyncHandler from "../helpers/async-handler";
import createAccessToken from "../helpers/create-access-token";
import User from "../models/user.model";
import bcrypt from "bcrypt";

const signIn = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) throw createHttpError(401, "Invalid credentials.");

  const hashedPassword = user.password || "";
  const isPasswordValid = await bcrypt.compare(password, hashedPassword);
  if (!isPasswordValid) throw createHttpError(401, "Invalid credentials.");

  const accessToken = createAccessToken({ id: user.id });

  res.status(200).json({
    user,
    accessToken
  });
});

const signUp = asyncHandler(async (req, res) => {
  // must have input validation here
  const { email, username, password } = req.body;

  // Check if email is already taken
  let user = await User.findOne({ email });
  if (user) throw createHttpError(422, "Email is already taken.");

  //Hash password
  const hashedPassword = await bcrypt.hash(password, 12);

  // Create User
  user = new User({
    email,
    username,
    password: hashedPassword
  });

  user = await user.save();
  res.status(201).json(user);
});

const AuthController = { signIn, signUp };

export default AuthController;
