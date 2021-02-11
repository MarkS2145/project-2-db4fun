'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
    name: DataTypes.STRING,
    bio: DataTypes.TEXT,
    valediction: DataTypes.STRING,
    imageURL: DataTypes.STRING,
    userID: DataTypes.INTEGER
    */
    return queryInterface.bulkInsert(
      "Authors",
      [
        {
          name: 'Winston Churchill',
          bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda labore, consequuntur incidunt reiciendis quae perferendis laudantium consectetur voluptate eveniet vel aliquid maiores enim optio tempore cupiditate a, voluptatibus possimus quam? Exercitationem voluptas, excepturi tempora quaerat deleniti ipsum ducimus sed eius perspiciatis blanditiis pariatur, libero rerum esse unde recusandae repellat',
          valediction: 'Never, never, never give up!',
          imageURL: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Sir_Winston_S_Churchill.jpg',
          userID: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Marcus Aurelius',
          bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda labore, consequuntur incidunt reiciendis quae perferendis laudantium consectetur.',
          valediction: 'All places that the eye of heaven visits. Are to the wise man ports and happy havens.',
          imageURL: 'https://373819-1169963-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2016/07/marcusaureliusdailystoic-scaled.jpg',
          userID: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Deletious Author',
          bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda labore.',
          valediction: 'I am not of this place, long.',
          imageURL: 'https://www.thepencompany.com/blog/wp-content/uploads/ballpoint-pen-leak-shirt.jpg',
          userID: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]
    )

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



