// controllers/jobs.ts
import { Request, Response } from "express";
import JobServices from "../services/jobs";
import Job from "../models/Job";

export const createJobController = async (req: Request, res: Response) => {
  try {
    const newJob = new Job({
      title: req.body.title,
      company: req.body.company,
      location: req.body.location,
      salary: req.body.salary,
      description: req.body.description,
    });

    const job = await JobServices.createJob(newJob);

    res.json(job);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create job" });
  }
};

export const getJobsController = async (req: Request, res: Response) => {
  try {
    const jobs = await JobServices.getJobs();
    res.json(jobs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
};

export const getJobByIdController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const job = await JobServices.getJobById(id);

    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }

    res.json(job);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch job" });
  }
};

export const updateJobController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const newData = req.body;

    const updatedJob = await JobServices.updateJob(id, newData);

    if (!updatedJob) {
      return res.status(404).json({ error: "Job not found" });
    }

    res.json(updatedJob);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update job" });
  }
};

export const deleteJobController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const deletedJob = await JobServices.deleteJob(id);

    if (!deletedJob) {
      return res.status(404).json({ error: "Job not found" });
    }

    res.json(deletedJob);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete job" });
  }
};
