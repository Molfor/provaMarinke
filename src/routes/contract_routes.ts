import { Router } from "express";
import ContractController from "../controllers/contract_controller.js";

const router = Router();

router.post("/contract", ContractController.createContract);
router.get("/profile/:profileId", ContractController.getContractsByProfile);

export default router;
