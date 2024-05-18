import mongoose, { Schema, Document } from "mongoose";

export interface Post extends Document {
  title: string;
  content: string;
  image?: string;
  author: { user: mongoose.Types.ObjectId; userType: string };
  likes: mongoose.Types.ObjectId[];
  comments: {
    user: mongoose.Types.ObjectId;
    content: string;
    createdAt: Date;
  }[];
  createdAt: Date;
}

const postSchema: Schema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String },
  author: {
    user: { type: Schema.Types.ObjectId, required: true },
    userType: { type: String, enum: ["Teacher", "Admin"], required: true },
  },
  likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  comments: [
    {
      user: { type: Schema.Types.ObjectId, ref: "User", required: true },
      content: { type: String, required: true },
      createdAt: { type: Date, default: Date.now },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<Post>("Post", postSchema);
