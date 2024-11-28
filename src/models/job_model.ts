import { Model, DataTypes, Optional, Sequelize } from "sequelize";
import sequelize from "../shared/database";

export interface JobAttributes {
  id: number;
  contractid: number;
  description: string;
  operationdate: Date;
  paymentdate: Date;
  price: number;
  paid: boolean;
}

export interface JobCreationAttributes extends Optional<JobAttributes, "id"> { }

export class Job extends Model<JobAttributes, JobCreationAttributes> implements JobAttributes {
  public id!: number;
  public contractid!: number;
  public description!: string;
  public operationdate!: Date;
  public paymentdate!: Date;
  public price!: number;
  public paid!: boolean;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function initializeJob(sequelize: Sequelize) {
  Job.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      contractid: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Contract',
          key: 'id',
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      operationdate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      paymentdate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      paid: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "Job",
      tableName: "job",
      timestamps: false,
      freezeTableName: true,
    }
  );
}

export default Job;
