'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Candidats',
      [
        {
          nameCandidats: 'Иванов Иван',
          age: 30,
          emailCandidate: '1@2',
          gender: 'man',
          salary: '350000',
          experience: 5,
          tel: 791,
          vacaincyId: 1,
          statusId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nameCandidats: 'Сидоров Олег',
          age: 38,
          emailCandidate: '1@3',
          gender: 'man',
          salary: '310000',
          experience: 6,
          tel: 791,
          vacaincyId: 2,
          statusId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
    },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Candidats', null, {});
  },
};



