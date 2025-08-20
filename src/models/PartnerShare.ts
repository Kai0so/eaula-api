// src/models/PartnerShare.ts
import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

interface PartnerShareAttributes {
  id: number;
  paymentId: number;
  partnerId: number;
  percentage: number;
  amount: number;
}

interface PartnerShareCreationAttributes extends Optional<PartnerShareAttributes, 'id'> {}

export class PartnerShare extends Model<PartnerShareAttributes, PartnerShareCreationAttributes> implements PartnerShareAttributes {
  public id!: number;
  public paymentId!: number;
  public partnerId!: number;
  public percentage!: number;
  public amount!: number;

  public static initialize(sequelize: Sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        paymentId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: { model: 'payments', key: 'id' },
          field: 'payment_id',
        },
        partnerId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: { model: 'partners', key: 'id' },
          field: 'partner_id',
        },
        percentage: {
          type: DataTypes.DECIMAL(5, 2),
          allowNull: false,
        },
        amount: {
          type: DataTypes.DECIMAL(10, 2),
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'partner_shares',
        timestamps: true,
        underscored: true,
      }
    );
  }

  public static associate(models: any) {
    this.belongsTo(models.Payment, { foreignKey: 'paymentId', as: 'payment' });
    this.belongsTo(models.Partner, { foreignKey: 'partnerId', as: 'partner' });
  }
}