import { Router } from "express";
import ProfileController from "../controllers/profile_controller.js";

const router = Router();

router.get("/:id", ProfileController.getProfileById);
router.post("/", ProfileController.createProfile);
router.post("/:id/deposit", ProfileController.deposit);
export default router;
