'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Candidats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Vacancy, Status}) {
      this.belongsTo(Vacancy, {foreignKey: 'vacaincyId'})
      this.belongsTo(Status, {foreignKey: 'statusId' })
    }
  }
  Candidats.init({
    nameCandidats: DataTypes.STRING,
    age: DataTypes.INTEGER,
    emailCandidate: DataTypes.STRING,
    gender: DataTypes.STRING,
    salary: DataTypes.STRING,
    experience: DataTypes.INTEGER,
    tel: DataTypes.INTEGER,
    vacaincyId: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Candidats',
  });
  return Candidats;
};