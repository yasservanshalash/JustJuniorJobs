// routes/jobs.ts
import { Router } from "express";
import {
  createJobController,
  getJobsController,
  getJobByIdController,
  updateJobController,
  deleteJobController,
  getJobCvController
} from "../controllers/jobs";

const router = Router();

// Create a new job posting
router.post("/", createJobController);

// Get a list of all job postings
router.get("/", getJobsController);

// Get a specific job posting by ID
router.get("/:id", getJobByIdController);

// Update a job posting by ID
router.put("/:id", updateJobController);

// Delete a job posting by ID
router.delete("/:id", deleteJobController);

router.get('/:jobId/cv', getJobCvController);

export default router;
