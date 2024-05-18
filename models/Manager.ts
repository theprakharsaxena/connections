import mongoose, { Schema, Document } from "mongoose";
import { Owner } from "./Owner";

export interface Manager extends Document {
  phoneNumber: string;
  permissions: string[];
  userType: string;
  createdBy: Owner["_id"];
}

const managerSchema: Schema = new Schema({
  phoneNumber: { type: String, required: true, unique: true },
  permissions: [{ type: String }],
  userType: { type: String, default: "manager" },
  createdBy: { type: Schema.Types.ObjectId, ref: "Owner", required: true },
});

export default mongoose.model<Manager>("Manager", managerSchema);
