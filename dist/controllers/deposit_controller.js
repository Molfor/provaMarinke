"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepositController = void 0;
const deposit_service_js_1 = __importDefault(require("../services/deposit_service.js"));
class DepositController {
    static async createDeposit(req, res) {
        try {
            const { profileId, depositValue } = req.body;
            if (!profileId || !depositValue) {
                return res.status(400).json({ error: "profileId e depositValue são obrigatórios!" });
            }
            const deposit = await deposit_service_js_1.default.createDeposit(profileId, depositValue);
            return res.status(201).json(deposit);
        }
        catch (error) {
            return res.status(500).json({ error: "Erro ao criar depósito", message: error });
        }
    }
}
exports.DepositController = DepositController;
exports.default = DepositController;
