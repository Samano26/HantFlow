/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const status = [
      'All',
      'Screening',
      'Video interview',
      'Employer CV',
      'Employer intrview',
      'Send offer',
      'Accep offer',
      'Reject',
    ];
    await queryInterface.bulkInsert(
      'Statuses',
      status.map((el) => ({ status: el, createdAt: new Date(), updatedAt: new Date() })),

      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Statuses', null, {});
  },
};