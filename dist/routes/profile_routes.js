"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const profile_controller_js_1 = __importDefault(require("../controllers/profile_controller.js"));
const router = (0, express_1.Router)();
router.get("/:id", profile_controller_js_1.default.getProfileById);
router.post("/", profile_controller_js_1.default.createProfile);
router.post("/:id/deposit", profile_controller_js_1.default.deposit);
exports.default = router;
