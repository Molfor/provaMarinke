"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contract_controller_js_1 = __importDefault(require("../controllers/contract_controller.js"));
const router = (0, express_1.Router)();
router.post("/contract", contract_controller_js_1.default.createContract);
router.get("/profile/:profileId", contract_controller_js_1.default.getContractsByProfile);
exports.default = router;
