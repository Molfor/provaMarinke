"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile = void 0;
exports.initializeProfile = initializeProfile;
const sequelize_1 = require("sequelize");
class Profile extends sequelize_1.Model {
}
exports.Profile = Profile;
function initializeProfile(sequelize) {
    Profile.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        firstname: {
            type: sequelize_1.DataTypes.STRING(45),
            allowNull: false,
        },
        lastname: {
            type: sequelize_1.DataTypes.STRING(45),
            allowNull: false,
        },
        profession: {
            type: sequelize_1.DataTypes.STRING(45),
            allowNull: false,
        },
        balance: {
            type: sequelize_1.DataTypes.DOUBLE,
            allowNull: false,
            defaultValue: 0,
        },
        type: {
            type: sequelize_1.DataTypes.STRING(45),
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: "Profile",
        tableName: "profile",
        timestamps: true,
    });
}
exports.default = Profile;
