// models/CourseInstance.ts
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database';
import { Course } from './course.model';
import { Enrollment } from './enrollment.model';

export class CourseInstance extends Model {
  public id!: number;
  public course_id!: number;
  public year!: number;
  public semester!: number;
  public start_date!: Date;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

CourseInstance.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    course_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'courses',
        key: 'id',
      },
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    semester: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    start_date: {
      type: DataTypes.DATEONLY,
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
    tableName: 'course_instances',
    timestamps: true,
    underscored: true,
  }
);
