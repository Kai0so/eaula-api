// models/Course.ts
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database';
import { Category } from './category.model';
import { CourseInstance } from './courseInstance.model';
import { Material } from './material.model';

export class InstitutionalCourse extends Model {
  public id!: number;
/*   public api_id!: number; */
  public name!: string;
  public category_id!: number;
  public price!: number;
  public register_price!: number;
  public material_price!: number;
  public sale_price!: number;
  public sale_price_one_parcel!: number;
  public active!: boolean;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

InstitutionalCourse.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    /* api_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'courses',
        key: 'id',
      },
    }, */
    name: {
      type: DataTypes.STRING,
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
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    register_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    material_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sale_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sale_price_one_parcel: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    tableName: 'institutional_courses',
    timestamps: true,
    underscored: true,
  }
);

