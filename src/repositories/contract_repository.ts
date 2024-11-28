import { Contract } from "../models/contract_model.js";
import { Op } from "sequelize";

export class ContractRepository {
  async findContractsByProfile(profileId: number) {
    return Contract.findAll({
      where: {
        [Op.or]: [
          { clientid: profileId },
          { contractorid: profileId },
        ],
      },
    });
  }

  async findById(contractId: number) {
    return Contract.findByPk(contractId);
  }

  async create(contractData: any) {
    return Contract.create(contractData);
  }

}

export default new ContractRepository();
