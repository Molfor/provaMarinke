"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileService = void 0;
const profile_repository_js_1 = __importDefault(require("../repositories/profile_repository.js"));
class ProfileService {
    async getProfileById(profileId) {
        const profile = await profile_repository_js_1.default.findById(profileId);
        if (!profile)
            throw new Error("Profile not found!");
        return profile;
    }
    async createProfile(profileData) {
        return profile_repository_js_1.default.create(profileData);
    }
    async depositToProfile(profileId, amount) {
        const profile = await profile_repository_js_1.default.findById(profileId);
        if (!profile) {
            throw new Error("Profile not found!");
        }
        const newBalance = profile.balance + amount;
        await profile_repository_js_1.default.updateBalance(profileId, newBalance);
        return { id: profileId, newBalance };
    }
}
exports.ProfileService = ProfileService;
exports.default = new ProfileService();
