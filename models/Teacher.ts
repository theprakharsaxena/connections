import mongoose, { Schema, Document } from "mongoose";
import { Admin } from "./Admin";

export interface Teacher extends Document {
  phoneNumber: string;
  permissions: string[];
  userType: string;
  createdBy: Admin["_id"];
}

const teacherSchema: Schema = new Schema({
  phoneNumber: { type: String, required: true, unique: true },
  permissions: [{ type: String }],
  userType: { type: String, default: "teacher" },
  createdBy: { type: Schema.Types.ObjectId, ref: "Admin", required: true },
});

export default mongoose.model<Teacher>("Teacher", teacherSchema);
