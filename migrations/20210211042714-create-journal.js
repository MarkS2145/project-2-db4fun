'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // await queryInterface.createTable('Journals', {
    //   id: {
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: Sequelize.INTEGER
    //   },
    //   title: {
    //     type: Sequelize.STRING,
    //     allowNull: false,
    //   },
    //   body: {
    //     type: Sequelize.TEXT
    //   },
    //   imageURL: {
    //     type: Sequelize.STRING
    //   },
    //   publish: {
    //     type: Sequelize.BOOLEAN
    //   },
    //   publish: {
    //     type: Sequelize.DATE,
    //     allowNull: true,
    //   },
    //   authorID: {
    //     allowNull: true,
    //     type: Sequelize.INTEGER,
    //     foreignKey: true
    //   },
    //   createdAt: {
    //     allowNull: false,
    //     type: Sequelize.DATE,
    //     defaultValue: new Date(),
    //   },
    //   updatedAt: {
    //     allowNull: false,
    //     type: Sequelize.DATE,
    //     defaultValue: new Date(),
    //   }
    // });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Journals');
  }
};