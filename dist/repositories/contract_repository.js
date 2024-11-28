"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractRepository = void 0;
const contract_model_js_1 = require("../models/contract_model.js");
const sequelize_1 = require("sequelize");
class ContractRepository {
    async findContractsByProfile(profileId) {
        return contract_model_js_1.Contract.findAll({
            where: {
                [sequelize_1.Op.or]: [
                    { clientid: profileId },
                    { contractorid: profileId },
                ],
            },
        });
    }
    async findById(contractId) {
        return contract_model_js_1.Contract.findByPk(contractId);
    }
    async create(contractData) {
        return contract_model_js_1.Contract.create(contractData);
    }
}
exports.ContractRepository = ContractRepository;
exports.default = new ContractRepository();
