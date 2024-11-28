import express from "express";
import { promisify } from "util";

import profileRoutes from "./routes/profile_routes.js";
import jobRoutes from "./routes/job_routes.js";
import contractRoutes from "./routes/contract_routes.js";
import depositRoutes from "./routes/deposit_routes.js";

import sequelize from "./shared/database.js";
import { initializeContract } from "./models/contract_model.js";
import { initializeProfile } from "./models/profile_model.js";
import { initializeJob } from "./models/job_model.js";
import { initializeDeposit } from "./models/deposit_model.js";
import { initializePayment } from "./models/payment_model.js";

const app = express();
app.use(express.json());
const PORT = 3000;

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexão com o banco de dados realizada com sucesso!");

    initializeProfile(sequelize);
    initializeContract(sequelize);
    initializeJob(sequelize);
    initializeDeposit(sequelize);
    initializePayment(sequelize);

    const Contract = sequelize.models.Contract;
    const Profile = sequelize.models.Profile;
    const Job = sequelize.models.Job;
    const Deposit = sequelize.models.Deposit;
    const Payment = sequelize.models.Payment;

    Job.belongsTo(Contract, { foreignKey: "contract_id" });
    Contract.hasMany(Job, { foreignKey: "contract_id" });

    Payment.belongsTo(Job, { foreignKey: "job_id" });
    Job.hasMany(Payment, { foreignKey: "job_id" });

    Deposit.belongsTo(Profile, { foreignKey: "profile_id" });
    Profile.hasMany(Deposit, { foreignKey: "profile_id" });

    await sequelize.sync();
    console.log("Modelos sincronizados com sucesso!");

    app.use("/profile", profileRoutes);
    app.use("/job", jobRoutes);
    app.use("/contract", contractRoutes);
    app.use("/deposit", depositRoutes);


    app.get("/", (req, res) => {
      res.status(200).send("Unifio API funcionando!");
    });

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error("Erro ao conectar com o banco de dados:", error);
  }
})();

export default app;
