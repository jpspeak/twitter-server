import mongoose, { Document, Model, Schema, Types } from "mongoose";

export interface TweetType extends Document {
  user: Types.ObjectId;
  body: string;
  image: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const tweetSchema = new Schema<TweetType>(
  {
    body: { type: String, required: true, trim: true },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: true
  }
);

const Tweet: Model<TweetType> = mongoose.model("Tweet", tweetSchema);
export default Tweet;
