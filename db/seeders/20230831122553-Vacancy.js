/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Vacancies',
      [
        {
          nameVacancy: 'Джуниор Фронтенд Разработчик',

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nameVacancy: 'Безработный>',

          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Vacancies', null, {});
  },
};
