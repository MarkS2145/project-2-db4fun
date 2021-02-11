'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Journals",
      /*
      title: DataTypes.STRING,
      body: DataTypes.TEXT,
      imageURL: DataTypes.STRING,
      publish: DataTypes.BOOLEAN,
      publishDate: DataTypes.DATE,
      authorID: DataTypes.INTEGER
      */
      [
        {
          title: 'My time in the Somme',
          body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur rem illum labore error explicabo? Minus officiis quia nam, magnam vitae explicabo vel veritatis omnis ipsa perferendis, autem ea magni repudiandae. Voluptatibus quisquam voluptas, totam molestias eaque nam itaque expedita blanditiis provident, facere, laudantium neque delectus fugit. Fugiat alias, vero odit officiis sint illum ipsa voluptatum. Consequatur recusandae quam voluptate excepturi commodi officia blanditiis perferendis, dolorem fuga, vitae, nulla ex labore a quo eum velit reiciendis ut earum animi qui? Tempore voluptatem maiores at assumenda, esse voluptates sit, quas qui magnam ad ut, beatae vero quos ipsa veniam a nam recusandae nostrum saepe doloribus vel explicabo reiciendis ratione? Quam eius nesciunt, eligendi possimus accusantium necessitatibus perferendis cupiditate unde ipsa vel repudiandae debitis, harum rerum consequatur tempora totam numquam consectetur. Illo error sequi veritatis quaerat laborum cumque? Tenetur, sequi illo. Vitae cupiditate id beatae enim laudantium. Ipsa modi cumque consectetur, temporibus dignissimos facilis molestias asperiores saepe quo omnis libero fuga dolore quae qui quibusdam et eius aut consequatur, deleniti deserunt ducimus aliquid iure. Fuga, commodi nihil. Nisi aliquid atque modi saepe numquam eligendi corrupti itaque vel expedita. Incidunt, voluptate. Illo sunt error dignissimos atque cupiditate debitis quasi ipsum optio nemo. Asperiores aperiam eveniet quibusdam unde iure alias dolorum praesentium voluptatibus odit placeat repellat ducimus, a quo optio neque labore nobis eum dignissimos porro consequatur fuga hic illo et cum. In soluta corporis qui, ad at consequatur velit facilis iusto necessitatibus dolor exercitationem quas dicta sit praesentium eum error ut fuga deleniti cupiditate, et ullam ducimus pariatur impedit. Officia fugiat minima sed amet error quia eos praesentium consequuntur consequatur dolor animi necessitatibus dignissimos aliquam quas molestias, natus, commodi ducimus nemo asperiores laborum. Quidem debitis dolorem temporibus autem provident illo nisi, commodi blanditiis, cumque voluptas cupiditate distinctio consequatur quasi doloribus dignissimos voluptatibus non et. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus sit fugit molestias modi. Dicta, ipsa! Lorem ipsum dolor sit amet.',
          imageURL: 'https://assets.centralparknyc.org/media/images/locations/_1650x767_crop_center-center_none/Conservatory-Garden_20181023_0024.jpg',
          publish: true,
          publishDate: new Date(),
          authorID: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Mark's adventure",
          body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur rem illum labore error explicabo? Voluptatibus quisquam voluptas, totam molestias eaque nam itaque expedita blanditiis provident, facere, laudantium neque delectus fugit. Fugiat alias, vero odit officiis sint illum ipsa voluptatum. Consequatur recusandae quam voluptate excepturi commodi officia blanditiis perferendis, dolorem fuga, vitae, nulla ex labore a quo eum velit reiciendis ut earum animi qui? Tempore voluptatem maiores at assumenda, esse voluptates sit, quas qui magnam ad ut, beatae vero quos ipsa veniam a nam recusandae nostrum saepe doloribus vel explicabo reiciendis ratione? Quam eius nesciunt, eligendi possimus accusantium necessitatibus perferendis cupiditate unde ipsa vel repudiandae debitis, harum rerum consequatur tempora totam numquam consectetur. Illo error sequi veritatis quaerat laborum cumque? Tenetur, sequi illo. Vitae cupiditate id beatae enim laudantium. Ipsa modi cumque consectetur, temporibus dignissimos facilis molestias asperiores saepe quo omnis libero fuga dolore quae qui quibusdam et eius aut consequatur, deleniti deserunt ducimus aliquid iure. Fuga, commodi nihil. Nisi aliquid atque modi saepe numquam eligendi corrupti itaque vel expedita. Incidunt, voluptate. Illo sunt error dignissimos atque cupiditate debitis quasi ipsum optio nemo. Asperiores aperiam eveniet quibusdam unde iure alias dolorum praesentium voluptatibus odit placeat repellat ducimus, a quo optio neque labore nobis eum dignissimos porro consequatur fuga hic illo et cum. In soluta corporis qui, ad at consequatur velit facilis iusto necessitatibus dolor exercitationem quas dicta sit praesentium eum error ut fuga deleniti cupiditate, et ullam ducimus pariatur impedit. Officia fugiat minima sed amet error quia eos praesentium consequuntur consequatur dolor animi necessitatibus dignissimos aliquam quas molestias, natus, commodi ducimus nemo asperiores laborum. Quidem debitis dolorem temporibus autem provident illo nisi, commodi blanditiis, cumque voluptas cupiditate distinctio consequatur quasi doloribus dignissimos voluptatibus non et. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus sit fugit molestias modi. Dicta, ipsa! Lorem ipsum dolor sit amet.',
          imageURL: 'https://i.pinimg.com/originals/67/40/8c/67408c4ab7a76f66d89a72c3c9a439fc.jpg',
          publish: true,
          publishDate: new Date(),
          authorID: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Delete me please',
          body: 'My time is short here... Lorem ipsum, dolor sit amet consectetur adipisicing elit. ',
          imageURL: 'https://i.pinimg.com/originals/67/40/8c/67408c4ab7a76f66d89a72c3c9a439fc.jpg',
          publish: true,
          publishDate: new Date(),
          authorID: 3,
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
