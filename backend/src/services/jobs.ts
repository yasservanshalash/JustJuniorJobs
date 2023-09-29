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

const getJobCv = async (id: string): Promise<Buffer | null> => {
    const job = await Job.findById(id);
  
    if (!job || !job.cv) {
      return null;
    }
  
    // Assuming the "cv" field in your model stores the CV data as a Buffer
    return job.cv;
  }

export default { createJob, getJobs, getJobById, updateJob, deleteJob, getJobCv };
