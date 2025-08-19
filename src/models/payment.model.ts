// models/Payment.ts
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database';
import { Enrollment } from './enrollment.model';

export class Payment extends Model {
  public id!: number;
  public enrollment_id!: number;
  public due_date!: Date;
  public amount!: number;
  public status!: 'pending' | 'paid' | 'expired';
  public paid_at!: Date | null;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

Payment.init(
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
    due_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('pending', 'paid', 'expired'),
      defaultValue: 'pending',
      allowNull: false,
    },
    paid_at: {
      type: DataTypes.DATE,
      allowNull: true,
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
    tableName: 'payments',
    timestamps: true,
    underscored: true,
  }
);

