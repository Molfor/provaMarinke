"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepositService = void 0;
const deposit_repository_js_1 = __importDefault(require("../repositories/deposit_repository.js"));
const profile_repository_js_1 = __importDefault(require("../repositories/profile_repository.js")); // Para buscar e atualizar o Profile
class DepositService {
    // Método para criar depósito e atualizar o balance
    async createDeposit(profileId, depositValue) {
        // 1. Criar o depósito
        const deposit = await deposit_repository_js_1.default.createDeposit(profileId, depositValue);
        // 2. Buscar o perfil associado
        const profile = await profile_repository_js_1.default.findById(profileId);
        if (!profile) {
            throw new Error("Profile não encontrado!");
        }
        // 3. Atualizar o balance do profile
        const newBalance = profile.balance + depositValue;
        await profile_repository_js_1.default.updateBalance(profileId, newBalance);
        // 4. Retornar o depósito criado
        return deposit;
    }
}
exports.DepositService = DepositService;
exports.default = new DepositService();
