'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BoletoSplit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BoletoSplit.init({
    paymentId: DataTypes.INTEGER,
    partnerId: DataTypes.INTEGER,
    repasseValue: DataTypes.DECIMAL,
    repasseStatus: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BoletoSplit',
  });
  return BoletoSplit;
};