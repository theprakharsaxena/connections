import mongoose, { Schema, Document } from "mongoose";

export interface Admin extends Document {
  phoneNumber: string;
  permissions: string[];
  userType: string;
}

const adminSchema: Schema = new Schema({
  phoneNumber: { type: String, required: true, unique: true },
  permissions: [{ type: String }],
  userType: { type: String, default: "admin" },
});

export default mongoose.model<Admin>("Admin", adminSchema);
