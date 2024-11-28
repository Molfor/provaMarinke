"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contract = void 0;
exports.initializeContract = initializeContract;
const sequelize_1 = require("sequelize");
class Contract extends sequelize_1.Model {
}
exports.Contract = Contract;
function initializeContract(sequelize) {
    Contract.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        terms: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        clientid: {
            type: sequelize_1.DataTypes.INTEGER,
            references: {
                model: 'Profile',
                key: 'id'
            },
        },
        contractorid: {
            type: sequelize_1.DataTypes.INTEGER,
            references: {
                model: 'Profile',
                key: 'id'
            },
        },
        operationdate: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
        },
        status: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: "Contract",
        tableName: "contract",
        timestamps: false,
        freezeTableName: true,
    });
}
exports.default = Contract;
