import Deposit from "../models/deposit_model.js";

export class DepositRepository {
  async createDeposit(profileId: number, depositValue: number) {
    const deposit = await Deposit.create({
      profile_id: profileId,
      depositvalue: depositValue,
      operationdate: new Date(),
    });
    return deposit;
  }
}

export default new DepositRepository();
