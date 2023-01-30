'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Messages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Users}) {
      // define association here
      this.belongsTo(Users, { foreignKey: "userId", as: "user" });

    }
  }
  Messages.init({
    userId:   {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    showName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    showReceiptient: {
      type: DataTypes.STRING,
      allowNull: false
    },
    showDate: {
      type: DataTypes.STRING,
      allowNull: false
    },
    putSoundtrack: {
      type: DataTypes.STRING,
      allowNull: false
    },
    theme: {
      type: DataTypes.STRING,
      allowNull: false
    },
    media: {
      type: DataTypes.STRING,
      allowNull: false
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Messages',
  });
  return Messages;
};