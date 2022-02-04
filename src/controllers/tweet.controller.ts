import createHttpError from "http-errors";
import { json } from "stream/consumers";
import asyncHandler from "../helpers/async-handler";
import Tweet from "../models/tweet.model";

const getAll = asyncHandler(async (req, res) => {
  const tweets = await Tweet.find();
  return res.json(tweets);
});

const getByUserId = asyncHandler(async (req, res) => {
  const userId = req.params.userId;
  const tweet = await Tweet.find({ user: userId });
  return res.json(tweet);
});

const getOne = asyncHandler(async (req, res) => {
  const tweetId = req.params.tweetId;
  const tweet = await Tweet.findById(tweetId);
  return res.json(tweet);
});

const create = asyncHandler(async (req, res) => {
  //must have input validation here

  const userId = req.params.userId;
  const body = req.params.body;
  const newTweet = new Tweet({
    user: userId,
    body
  });

  const createdTweet = await newTweet.save();
  return res.json(createdTweet);
});
const update = asyncHandler(async (req, res) => {
  //must have input validation here

  const tweetId = req.params.tweetId;
  const body = req.params.body;

  const existingTweeter = await Tweet.findById(tweetId);
  if (!existingTweeter) throw new createHttpError.NotFound();

  existingTweeter.body = body;
  const updatedTweet = existingTweeter.save();

  return res.json(updatedTweet);
});
const remove = asyncHandler(async (req, res) => {
  const tweetId = req.params.tweetId;
  const existingTweeter = await Tweet.findById(tweetId);
  if (!existingTweeter) throw new createHttpError.NotFound();

  await existingTweeter.remove();
  return res.status(204).end();
});

const TweetController = { getAll, getByUserId, getOne, create, update, remove };
export default TweetController;
