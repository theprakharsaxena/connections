import mongoose, { Schema, Document } from "mongoose";

export interface Job extends Document {
  title: string;
  description: string;
  location: string;
  type: string;
  salary: number;
  postedBy: { user: mongoose.Types.ObjectId; userType: string };
  institute: mongoose.Types.ObjectId;
  approved: boolean;
}

const jobSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  type: {
    type: String,
    enum: ["Full-time", "Part-time", "Contract"],
    required: true,
  },
  salary: { type: Number, required: true },
  postedBy: {
    user: { type: Schema.Types.ObjectId, required: true },
    userType: {
      type: String,
      enum: ["Teacher", "Admin", "Student"],
      required: true,
    },
  },
  institute: { type: Schema.Types.ObjectId, required: true },
  approved: { type: Boolean, default: false },
});

export default mongoose.model<Job>("Job", jobSchema);
