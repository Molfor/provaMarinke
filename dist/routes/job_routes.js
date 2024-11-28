"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const job_controller_js_1 = __importDefault(require("../controllers/job_controller.js"));
const router = (0, express_1.Router)();
router.get("/unpaid/:contractId", job_controller_js_1.default.getUnpaidJobsByContract);
router.post("/", job_controller_js_1.default.createJob);
exports.default = router;
