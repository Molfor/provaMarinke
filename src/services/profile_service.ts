import ProfileRepository from "../repositories/profile_repository.js";

export class ProfileService {
  async getProfileById(profileId: number) {
    const profile = await ProfileRepository.findById(profileId);
    if (!profile) throw new Error("Profile not found!");
    return profile;
  }

  async createProfile(profileData: any) {
    return ProfileRepository.create(profileData);
  }

  async depositToProfile(profileId: number, amount: number) {
    const profile = await ProfileRepository.findById(profileId);

    if (!profile) {
      throw new Error("Profile not found!");
    }

    const newBalance = profile.balance + amount;
    await ProfileRepository.updateBalance(profileId, newBalance);

    return { id: profileId, newBalance };
  }
}

export default new ProfileService();
