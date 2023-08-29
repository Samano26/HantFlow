

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Candidats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nameCandidats: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      emailCandidate: {
        type: Sequelize.STRING,
        unique: true
      },
      gender: {
        type: Sequelize.STRING
      },
      salary: {
        type: Sequelize.STRING
      },
      experience: {
        type: Sequelize.INTEGER
      },
      tel: {
        type: Sequelize.INTEGER
      },
      vacaincyId: {
        references: {
          model: 'Vacancies',
          key: 'id',
          },
          onDelete: 'CASCADE',
        type: Sequelize.INTEGER
      },
      statusId: {
      references: {
      model: 'Statuses',
      key: 'id',
      },
      onDelete: 'CASCADE',
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Candidats');
  }
};