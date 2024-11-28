"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractController = void 0;
const contract_service_js_1 = __importDefault(require("../services/contract_service.js"));
class ContractController {
    constructor() {
        this.createContract = async (req, res) => {
            try {
                const contract = await contract_service_js_1.default.createContract(req.body);
                res.status(201).json(contract);
            }
            catch (error) {
                res.status(500).json({ message: "Erro ao criar o contract", error });
            }
        };
    }
    async getContractsByProfile(req, res) {
        try {
            const { profileId } = req.params;
            const contracts = await contract_service_js_1.default.getContractsByProfile(Number(profileId));
            res.status(200).json(contracts);
        }
        catch (error) {
            res.status(404).json({ error: error });
        }
    }
}
exports.ContractController = ContractController;
exports.default = new ContractController();
