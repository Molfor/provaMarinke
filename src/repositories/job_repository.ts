import { Job } from "../models/job_model.js";

export class JobRepository {
  async findUnpaidJobsByContract(contractId: number) {
    return await Job.findAll({
      where: {
        contractid: contractId,
        paid: false,
      }
    });
  }
  async create(jobData: any) {
    return Job.create(jobData);
  }
}

export default new JobRepository();
