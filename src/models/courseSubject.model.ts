// models/Course.ts
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database';
import { Category } from './category.model';
import { CourseInstance } from './courseInstance.model';
import { Material } from './material.model';

export class CourseSubject extends Model {
  public id!: number;
  public name!: string;
  public workload!: number;
  public position!: number;
  public course_id!: number;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

CourseSubject.init(
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
    workload: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    course_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'institutional_courses',
        key: 'id',
      },
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
    tableName: 'course_subjects',
    timestamps: true,
    underscored: true,
  }
);

