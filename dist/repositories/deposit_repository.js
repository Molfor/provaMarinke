"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepositRepository = void 0;
const deposit_model_js_1 = __importDefault(require("../models/deposit_model.js"));
class DepositRepository {
    async createDeposit(profileId, depositValue) {
        const deposit = await deposit_model_js_1.default.create({
            profile_id: profileId,
            depositvalue: depositValue,
            operationdate: new Date(),
        });
        return deposit;
    }
}
exports.DepositRepository = DepositRepository;
exports.default = new DepositRepository();
