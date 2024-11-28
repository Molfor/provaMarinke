import { Model, DataTypes, Sequelize } from "sequelize";
import sequelize from "../shared/database";

export interface PaymentAttributes {
  id: number;
  job_id: number;
  operationdate: Date;
  paymentvalue: number;
}

export interface PaymentCreationAttributes extends PaymentAttributes {}

export class Payment extends Model<PaymentAttributes, PaymentCreationAttributes>
  implements PaymentAttributes {
  public id!: number;
  public job_id!: number;
  public operationdate!: Date;
  public paymentvalue!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function initializePayment(sequelize: Sequelize) {
  Payment.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      job_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      operationdate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      paymentvalue: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Payment",
      tableName: "payments",
      timestamps: false,
      freezeTableName: true,
    }
  );
}

