import express, { Request, Response, Router } from "express";
import DepositController from "../controllers/deposit_controller";

const router = Router();

router.post("/", DepositController.createDeposit);

export default router;
