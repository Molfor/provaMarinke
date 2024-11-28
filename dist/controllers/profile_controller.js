"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileController = void 0;
const profile_service_js_1 = __importDefault(require("../services/profile_service.js"));
class ProfileController {
    async getProfileById(req, res) {
        try {
            const { id } = req.params;
            const profile = await profile_service_js_1.default.getProfileById(Number(id));
            res.status(200).json(profile);
        }
        catch (error) {
            res.status(404).json({ error: error });
        }
    }
    async createProfile(req, res) {
        try {
            const { firstname, lastname, profession, balance, type } = req.body;
            const newProfile = await profile_service_js_1.default.createProfile({
                firstname,
                lastname,
                profession,
                balance,
                type,
            });
            res.status(201).json(newProfile);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }
    async deposit(req, res) {
        try {
            const { id } = req.params;
            const { amount } = req.body;
            if (amount <= 0) {
                throw new Error("Amount must be greater than zero");
            }
            const result = await profile_service_js_1.default.depositToProfile(Number(id), amount);
            res.status(200).json(result);
        }
        catch (error) {
            res.status(400).json({ error: error });
        }
    }
}
exports.ProfileController = ProfileController;
exports.default = new ProfileController();
