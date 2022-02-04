import mongoose, { Document, Model, Schema } from "mongoose";
import Tweet from "./tweet.model";

export interface UserType extends Document {
  email: string;
  password: string;
  username: string;
  displayPicture: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const userSchema = new Schema<UserType>(
  {
    email: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    username: { type: String, required: true, trim: true },
    displayPicture: String
  },
  {
    timestamps: true
  }
);

userSchema.post("remove", async doc => {
  await Tweet.deleteMany({ user: doc._id });
});

const User: Model<UserType> = mongoose.model("User", userSchema);
export default User;
