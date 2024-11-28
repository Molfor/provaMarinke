import JobRepository from "../repositories/job_repository.js";
import ContractRepository from "../repositories/contract_repository.js";

export class JobService {
  async getUnpaidJobsByContract(contractId: number) {
    const contract = await ContractRepository.findById(contractId);
    if (!contract) {
      throw new Error("Contract não encontrado!");
    }

    const jobs = await JobRepository.findUnpaidJobsByContract(contractId);

    return jobs;
  }

  async createJob(data: any) {
    return await JobRepository.create(data);
  }

}

export default new JobService();
