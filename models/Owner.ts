import mongoose, { Schema, Document } from "mongoose";

export interface Owner extends Document {
  phoneNumber: string;
  permissions: string[];
  userType: string;
}

const ownerSchema: Schema = new Schema({
  phoneNumber: { type: String, required: true, unique: true },
  permissions: [{ type: String }],
  userType: { type: String, default: "owner" },
});

export default mongoose.model<Owner>("Owner", ownerSchema);
