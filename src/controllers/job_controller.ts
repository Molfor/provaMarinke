import { Request, Response } from "express";
import JobService from "../services/job_service.js";
import JobRepository from "../repositories/job_repository.js";

export class JobController {
  async getUnpaidJobsByContract(req: Request, res: Response) {
    const { contractId } = req.params;

    try {
      const jobs = await JobRepository.findUnpaidJobsByContract(Number(contractId));
      
      if (!jobs || jobs.length === 0) {
        return res.status(404).json({ message: "Nenhum job não pago encontrado para esse contrato" });
      }

      res.status(200).json(jobs); 
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erro ao buscar jobs não pagos", error });
    }
  }

  createJob = async (req: Request, res: Response) => {
    try {
      const job = await JobService.createJob(req.body);
      res.status(201).json(job);
    } catch (error) {
      res.status(500).json({ message: "Erro ao criar o job", error });
    }
  };
}

export default new JobController();
