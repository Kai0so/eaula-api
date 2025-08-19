// models/Enrollment.ts
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database';
import { Student } from './student.model';
import { CourseInstance } from './courseInstance.model';
import { Payment } from './payment.model';
import { Grade } from './grade.model';

export class Enrollment extends Model {
  public id!: number;
  public student_id!: number;
  public course_instance_id!: number;
  public contract_url!: string | null;
  public signed_at!: Date | null;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

Enrollment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'students',
        key: 'id',
      },
    },
    course_instance_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'course_instances',
        key: 'id',
      },
    },
    contract_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    signed_at: {
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
    tableName: 'enrollments',
    timestamps: true,
    underscored: true,
  }
);

