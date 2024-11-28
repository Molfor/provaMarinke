import { Router } from "express";
import JobController from "../controllers/job_controller.js";

const router = Router();

router.get("/contract/:contractId/unpaid", JobController.getUnpaidJobsByContract);
router.post("/", JobController.createJob);

export default router;
