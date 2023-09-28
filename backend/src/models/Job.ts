import mongoose, { Document } from "mongoose";

const { Schema } = mongoose;

export type JobDocument = Document & {
  title: string;
  company: string;
  location: string;
  salary: number;
  description: string;
};

const JobSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export default mongoose.model<JobDocument>("Job", JobSchema);