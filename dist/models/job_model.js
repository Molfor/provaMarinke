"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Job = void 0;
exports.initializeJob = initializeJob;
const sequelize_1 = require("sequelize");
class Job extends sequelize_1.Model {
}
exports.Job = Job;
function initializeJob(sequelize) {
    Job.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        contractid: {
            type: sequelize_1.DataTypes.INTEGER,
            references: {
                model: 'Contract',
                key: 'id',
            },
        },
        description: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        operationdate: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        paymentdate: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: sequelize_1.DataTypes.DOUBLE,
            allowNull: false,
        },
        paid: {
            type: sequelize_1.DataTypes.BOOLEAN, // Alterado para BOOLEAN
            allowNull: false,
            defaultValue: false, // Definindo um valor padrão, pode ser true também
        },
    }, {
        sequelize,
        modelName: "Job",
        tableName: "job",
        timestamps: false,
        freezeTableName: true,
    });
}
exports.default = Job;
