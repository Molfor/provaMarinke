"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileRepository = void 0;
const profile_model_js_1 = require("../models/profile_model.js");
class ProfileRepository {
    async findById(profileId) {
        return profile_model_js_1.Profile.findByPk(profileId);
    }
    async create(profileData) {
        return profile_model_js_1.Profile.create(profileData);
    }
    async updateBalance(profileId, newBalance) {
        return await profile_model_js_1.Profile.update({ balance: newBalance }, { where: { id: profileId } });
    }
    async findAll() {
        return profile_model_js_1.Profile.findAll();
    }
}
exports.ProfileRepository = ProfileRepository;
exports.default = new ProfileRepository();
