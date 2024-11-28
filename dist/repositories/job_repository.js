"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobRepository = void 0;
const job_model_js_1 = require("../models/job_model.js");
class JobRepository {
    async findUnpaidJobsByContract(contractId) {
        return await job_model_js_1.Job.findAll({
            where: {
                contractid: contractId,
                paid: false, // Filtro para apenas jobs não pagos
            }
        });
    }
    async create(jobData) {
        return job_model_js_1.Job.create(jobData);
    }
}
exports.JobRepository = JobRepository;
exports.default = new JobRepository();
