"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const profile_routes_js_1 = __importDefault(require("./routes/profile_routes.js"));
const job_routes_js_1 = __importDefault(require("./routes/job_routes.js"));
const contract_routes_js_1 = __importDefault(require("./routes/contract_routes.js"));
const deposit_routes_js_1 = __importDefault(require("./routes/deposit_routes.js"));
const database_js_1 = __importDefault(require("./shared/database.js"));
const contract_model_js_1 = require("./models/contract_model.js");
const profile_model_js_1 = require("./models/profile_model.js");
const job_model_js_1 = require("./models/job_model.js");
const deposit_model_js_1 = require("./models/deposit_model.js");
const payment_model_js_1 = require("./models/payment_model.js");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 3000;
(async () => {
    try {
        await database_js_1.default.authenticate();
        console.log("Conexão com o banco de dados realizada com sucesso!");
        (0, profile_model_js_1.initializeProfile)(database_js_1.default);
        (0, contract_model_js_1.initializeContract)(database_js_1.default);
        (0, job_model_js_1.initializeJob)(database_js_1.default);
        (0, deposit_model_js_1.initializeDeposit)(database_js_1.default);
        (0, payment_model_js_1.initializePayment)(database_js_1.default);
        const Contract = database_js_1.default.models.Contract;
        const Profile = database_js_1.default.models.Profile;
        const Job = database_js_1.default.models.Job;
        const Deposit = database_js_1.default.models.Deposit;
        const Payment = database_js_1.default.models.Payment;
        Job.belongsTo(Contract, { foreignKey: "contract_id" });
        Contract.hasMany(Job, { foreignKey: "contract_id" });
        Payment.belongsTo(Job, { foreignKey: "job_id" });
        Job.hasMany(Payment, { foreignKey: "job_id" });
        Deposit.belongsTo(Profile, { foreignKey: "profile_id" });
        Profile.hasMany(Deposit, { foreignKey: "profile_id" });
        await database_js_1.default.sync();
        console.log("Modelos sincronizados com sucesso!");
        app.use("/profile", profile_routes_js_1.default);
        app.use("/job", job_routes_js_1.default);
        app.use("/contract", contract_routes_js_1.default);
        app.use("/deposit", deposit_routes_js_1.default);
        app.get("/", (req, res) => {
            res.status(200).send("Unifio API funcionando!");
        });
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    }
    catch (error) {
        console.error("Erro ao conectar com o banco de dados:", error);
    }
})();
exports.default = app;
