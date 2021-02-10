'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Authors",
      /*
      name: DataTypes.STRING,
      bio: DataTypes.STRING,
      valediction: DataTypes.STRING,
      imageURL: DataTypes.STRING,
      userID: DataTypes.INTEGER1
      */
      [
        {
          name: 'Winston Churchill',
          bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex fuga nobis maiores repellat illo quidem atque vero officia veritatis dignissimos, delectus eveniet qui nostrum mollitia, repellendus consequatur sapiente molestias voluptatum?',
          valediction: 'Lorem ipsum dolor sit amet.',
          imageURL: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Sir_Winston_S_Churchill.jpg',
          userID: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Mark Twain',
          bio: 'Officia fugiat minima sed amet error quia eos praesentium consequuntur consequatur dolor animi necessitatibus dignissimos aliquam quas molestias, natus, commodi ducimus nemo asperiores laborum. Quidem debitis dolorem temporibus autem provident illo nisi, commodi blanditiis, cumque voluptas cupiditate distinctio consequatur quasi doloribus dignissimos voluptatibus non et.',
          valediction: 'Fuga, commodi nihil.',
          imageURL: 'https://media.newyorker.com/photos/59ee271c4d2a207182a81b01/master/w_2560%2Cc_limit/Piepenbring-Mark-Twain.jpg',
          userID: 2,
          createdAt: new Date(), 
          updatedAt: new Date(),
        },
        {
          name: 'officia blanditiis',
          bio: 'Cum, deserunt at quae inventore, ipsa explicabo doloremque veniam optio consequatur quo cumque blanditiis perspiciatis necessitatibus dolor illum officia eum culpa aspernatur nemo excepturi expedita! Non ratione repellendus quasi pariatur deserunt, tempore hic provident, culpa laborum est facilis, exercitationem cumque corporis tenetur.',
          valediction: 'Lorem ipsum dolor sit amet.',
          imageURL: 'https://cdn.britannica.com/58/181058-050-9CC9F60F/Marcus-Tullius-Cicero-detail-marble-bust-Capitoline.jpg',
          userID: 3,
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



