// models/Course.ts
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database';
import { Category } from './category.model';
import { CourseInstance } from './courseInstance.model';
import { Material } from './material.model';

export class Course extends Model {
  public id!: number;
  public name!: string;
  public category_id!: number;
  public active!: boolean;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

Course.init(
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
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'categories',
        key: 'id',
      },
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
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
    tableName: 'courses',
    timestamps: true,
    underscored: true,
  }
);

