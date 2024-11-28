import { Request, Response } from "express";
import DepositService from "../services/deposit_service.js";

export class DepositController {
  static async createDeposit(req: Request, res: Response): Promise<Response> {
    try {
      const { profileId, depositValue } = req.body;

      if (!profileId || !depositValue) {
        return res.status(400).json({ error: "profileId e depositValue são obrigatórios!" });
      }

      const deposit = await DepositService.createDeposit(profileId, depositValue);

      return res.status(201).json(deposit);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao criar depósito", message: error });
    }
  }
}

export default DepositController;
