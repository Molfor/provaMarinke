"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const deposit_controller_1 = __importDefault(require("../controllers/deposit_controller"));
const router = (0, express_1.Router)();
router.post("/", deposit_controller_1.default.createDeposit);
exports.default = router;
