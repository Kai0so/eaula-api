// models/Student.ts
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database';
import { Enrollment } from './enrollment.model';

export class Student extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public cpf!: string;
  public birth_date!: Date;
  public phone!: string;
  public password_hash!: string;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

Student.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    cpf: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    birth_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
    },
    password_hash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: 'students',
    timestamps: true,
    underscored: true,
  }
);
