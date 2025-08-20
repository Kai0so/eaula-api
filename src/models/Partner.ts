// src/models/Partner.ts
import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

interface PartnerAttributes {
  id: number;
  name: string;
  email: string; // Para notificação ou relatórios
}

interface PartnerCreationAttributes extends Optional<PartnerAttributes, 'id'> { }

export class Partner extends Model<PartnerAttributes, PartnerCreationAttributes> implements PartnerAttributes {
  public id!: number;
  public name!: string;
  public email!: string;

  public static initialize(sequelize: Sequelize) {
    this.init(
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
          allowNull: false,
          unique: true,
        },
      },
      {
        sequelize,
        tableName: 'partners',
        timestamps: true,
        underscored: true,
      }
    );
  }
}