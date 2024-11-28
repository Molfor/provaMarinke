"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
exports.initializePayment = initializePayment;
const sequelize_1 = require("sequelize");
class Payment extends sequelize_1.Model {
}
exports.Payment = Payment;
function initializePayment(sequelize) {
    Payment.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        job_id: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        operationdate: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
        },
        paymentvalue: {
            type: sequelize_1.DataTypes.DOUBLE,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: "Payment",
        tableName: "payments",
        timestamps: false,
        freezeTableName: true,
    });
}
