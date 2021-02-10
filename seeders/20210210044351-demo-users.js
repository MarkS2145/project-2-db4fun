'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
    [
      {
        username: 'reader',
        password: '$2a$10$H3p7vN1pBDay9571NATux.ieWtyBpbG6UAyGdrGkVezlfKC2dt5Sy',
        email: 'readyreader@hotmail.com',
        subscribed: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'mark',
        password: '$2a$10$H3p7vN1pBDay9571NATux.ieWtyBpbG6UAyGdrGkVezlfKC2dt5Sy',
        email: 'mark@hotmail.com',
        subscribed: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'yoshie',
        password: '$2a$10$H3p7vN1pBDay9571NATux.ieWtyBpbG6UAyGdrGkVezlfKC2dt5Sy',
        email: 'sweetness@hotmail.com',
        subscribed: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'jill',
        password: '$2a$10$H3p7vN1pBDay9571NATux.ieWtyBpbG6UAyGdrGkVezlfKC2dt5Sy',
        email: 'jilly@gmail.com',
        subscribed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
