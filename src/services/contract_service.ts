import ContractRepository from "../repositories/contract_repository.js";

export class ContractService {
  async getContractsByProfile(profileId: number) {
    const contracts = await ContractRepository.findContractsByProfile(profileId);

    if (!contracts || contracts.length === 0) {
      throw new Error("No contracts found for this profile!");
    }

    return contracts;
  }

  async createContract(data: any) {
    return await ContractRepository.create(data);
  }
}

export default new ContractService();
