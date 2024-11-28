"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractService = void 0;
const contract_repository_js_1 = __importDefault(require("../repositories/contract_repository.js"));
class ContractService {
    async getContractsByProfile(profileId) {
        const contracts = await contract_repository_js_1.default.findContractsByProfile(profileId);
        if (!contracts || contracts.length === 0) {
            throw new Error("No contracts found for this profile!");
        }
        return contracts;
    }
    async createContract(data) {
        return await contract_repository_js_1.default.create(data);
    }
}
exports.ContractService = ContractService;
exports.default = new ContractService();
