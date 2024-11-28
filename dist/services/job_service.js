"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobService = void 0;
const job_repository_js_1 = __importDefault(require("../repositories/job_repository.js"));
const contract_repository_js_1 = __importDefault(require("../repositories/contract_repository.js"));
class JobService {
    async getUnpaidJobsByContract(contractId) {
        // Verificar se o contrato existe
        const contract = await contract_repository_js_1.default.findById(contractId);
        if (!contract) {
            throw new Error("Contract não encontrado!");
        }
        // Buscar os jobs não pagos do contrato
        const jobs = await job_repository_js_1.default.findUnpaidJobsByContract(contractId);
        return jobs;
    }
    async createJob(data) {
        return await job_repository_js_1.default.create(data);
    }
}
exports.JobService = JobService;
exports.default = new JobService();
