// models/Grade.ts
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database';
import { Enrollment } from './enrollment.model';

export class Grade extends Model {
  public id!: number;
  public enrollment_id!: number;
  public test_name!: string;
  public grade!: number;
  public date!: Date;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

Grade.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    enrollment_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'enrollments',
        key: 'id',
      },
    },
    test_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    grade: {
      type: DataTypes.DECIMAL(4, 2),
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
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
    tableName: 'grades',
    timestamps: true,
    underscored: true,
  }
);

