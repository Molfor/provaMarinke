import DepositRepository from "../repositories/deposit_repository.js";
import ProfileRepository from "../repositories/profile_repository.js";

export class DepositService {
  async createDeposit(profileId: number, depositValue: number) {
    const deposit = await DepositRepository.createDeposit(profileId, depositValue);

    const profile = await ProfileRepository.findById(profileId);

    if (!profile) {
      throw new Error("Profile não encontrado!");
    }

    const newBalance = profile.balance + depositValue;
    await ProfileRepository.updateBalance(profileId, newBalance);

    return deposit;
  }

}

export default new DepositService();
