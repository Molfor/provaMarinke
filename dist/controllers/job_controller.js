"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobController = void 0;
const job_service_js_1 = __importDefault(require("../services/job_service.js"));
const job_repository_js_1 = __importDefault(require("../repositories/job_repository.js")); // Certifique-se que está correto
class JobController {
    constructor() {
        // Método para criar um job
        this.createJob = async (req, res) => {
            try {
                const job = await job_service_js_1.default.createJob(req.body);
                res.status(201).json(job);
            }
            catch (error) {
                res.status(500).json({ message: "Erro ao criar o job", error });
            }
        };
    }
    // Método para buscar jobs não pagos por contrato
    async getUnpaidJobsByContract(req, res) {
        const { contractId } = req.params; // Obtém o contractId da rota
        try {
            // Chama o repositório para buscar jobs não pagos
            const jobs = await job_repository_js_1.default.findUnpaidJobsByContract(Number(contractId));
            // Verifica se não encontrou jobs não pagos
            if (!jobs || jobs.length === 0) {
                return res.status(404).json({ message: "Nenhum job não pago encontrado para esse contrato" });
            }
            // Retorna os jobs encontrados
            res.status(200).json(jobs);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erro ao buscar jobs não pagos", error });
        }
    }
}
exports.JobController = JobController;
exports.default = new JobController();
