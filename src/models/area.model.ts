import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database';

console.log('Sequelize instance:', sequelize instanceof require('sequelize').Sequelize); // Deve ser true

export class Area extends Model {
  public id!: number;
  public name!: string;
}

Area.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
  },
  {
    sequelize,
    tableName: 'courses_area', // Nome da tabela já existente
    timestamps: false,
  }
);
