// models/Material.ts
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database';
import { Course } from './course.model';

export class Material extends Model {
  public id!: number;
  public course_id!: number;
  public type!: 'pdf' | 'video';
  public title!: string;
  public url!: string;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

Material.init(
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
    type: {
      type: DataTypes.ENUM('pdf', 'video'),
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
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
    tableName: 'materials',
    timestamps: true,
    underscored: true,
  }
);
