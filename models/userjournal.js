'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserJournal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UserJournal.init({
    userId: DataTypes.INTEGER,
    journalId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserJournal',
  });
  return UserJournal;
};