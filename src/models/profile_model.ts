import { Model, DataTypes, Sequelize } from "sequelize";
import sequelize from "../shared/database";

export class Profile extends Model {
  public id!: number;
  public firstname!: string;
  public lastname!: string;
  public profession!: string;
  public balance!: number;
  public type!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function initializeProfile(sequelize: Sequelize) {
  Profile.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      firstname: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      profession: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      balance: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        defaultValue: 0,
      },
      type: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Profile",
      tableName: "profile",
      timestamps: true,
    }
  );
}

export default Profile;
