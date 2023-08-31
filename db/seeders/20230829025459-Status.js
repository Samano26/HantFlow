

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const vacancy = ['Manager', 'Lawyer', 'Marketing specialist']
    await queryInterface.bulkInsert('Vacancies', vacancy.map((el) => ({ nameVacancy: el, createdAt: new Date(), updatedAt: new Date() }))
       
     , {});
    
    const status = ['All', 'Screening', 'Video interview', 'Employer CV', 'Employer intrview', 'Send offer', 'Accep offer', 'Reject']
    await queryInterface.bulkInsert('Statuses', status.map((el) => ({ status: el, createdAt: new Date(), updatedAt: new Date() }))
       
     , {});
  
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
