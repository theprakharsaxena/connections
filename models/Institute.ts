import mongoose, { Schema, Document } from "mongoose";
import { Admin } from "./Admin";

export interface Institute extends Document {
  name: string;
  type: string;
  address: string;
  admin: Admin["_id"];
}

const instituteSchema: Schema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  address: { type: String, required: true },
  admin: { type: Schema.Types.ObjectId, ref: "Admin", required: true },
});

export default mongoose.model<Institute>("Institute", instituteSchema);
