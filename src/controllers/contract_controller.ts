import { Request, Response } from "express";
import ContractService from "../services/contract_service.js";

export class ContractController {
  async getContractsByProfile(req: Request, res: Response) {
    try {
      const { profileId } = req.params;
      const contracts = await ContractService.getContractsByProfile(Number(profileId));
      res.status(200).json(contracts);
    } catch (error) {
      res.status(404).json({ error: error });
    }
  }

  createContract = async (req: Request, res: Response) => {
    try {
        const contract = await ContractService.createContract(req.body);
        res.status(201).json(contract);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar o contract", error });
    }

}
}
export default new ContractController();
