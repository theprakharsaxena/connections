import mongoose, { Schema, Document } from "mongoose";

export interface Student extends Document {
  phoneNumber: string;
  permissions: string[];
  userType: string;
}

const studentSchema: Schema = new Schema({
  phoneNumber: { type: String, required: true, unique: true },
  permissions: [{ type: String }],
  userType: { type: String, default: "student" },
});

export default mongoose.model<Student>("Student", studentSchema);
