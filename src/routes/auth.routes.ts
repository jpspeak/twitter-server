import express from "express";
import AuthController from "../controllers/auth.controller";
const router = express.Router();

router.post("/signIn", AuthController.signIn);
router.post("/signUp", AuthController.signUp);

export default router;
