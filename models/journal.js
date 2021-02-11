'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Journal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Journal.init({
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    imageURL: DataTypes.STRING,
    publish: DataTypes.BOOLEAN,
    publishDate: DataTypes.DATE,
    authorID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Journal',
  });
  return Journal;
};