import { Profile } from "../models/profile_model.js";

export class ProfileRepository {
  async findById(profileId: number) {
    return Profile.findByPk(profileId);
  }

  async create(profileData: any) {
    return Profile.create(profileData);
  }

  async updateBalance(profileId: number, newBalance: number) {
    return await Profile.update(
      { balance: newBalance },
      { where: { id: profileId } }
    );
  }

  async findAll() {
    return Profile.findAll();
  }
}

export default new ProfileRepository();
