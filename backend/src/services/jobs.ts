// services/jobs.ts
import { JobDocument } from "../models/Job";
import Job from "../models/Job";

const createJob = async (job: JobDocument): Promise<JobDocument> => {
  return job.save();
}

const getJobs = async (): Promise<JobDocument[]> => {
  return Job.find();
}

const getJobById = async (id: string): Promise<JobDocument | null> => {
  return Job.findById(id);
}

const updateJob = async (id: string, newData: JobDocument): Promise<JobDocument | null> => {
  return Job.findByIdAndUpdate(id, newData, { new: true });
}

const deleteJob = async (id: string): Promise<JobDocument | null> => {
  return Job.findByIdAndDelete(id);
}

export default { createJob, getJobs, getJobById, updateJob, deleteJob };
