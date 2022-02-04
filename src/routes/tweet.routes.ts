import express from "express";
import TweetController from "../controllers/tweet.controller";
import requireAuth from "../middlewares/require-auth";
const router = express.Router();

router.get("/:tweetId", TweetController.getOne);
router.get("/by-user/:userId", TweetController.getByUserId);
router.post("/create", requireAuth, TweetController.create);
router.put("/update", requireAuth, TweetController.update);
router.delete("/delete", requireAuth, TweetController.remove);

export default router;
