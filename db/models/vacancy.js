'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vacancy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Candidat}) {
     this.hasMany(Candidat, {foreignKey: 'vacaincyId'})
    }
  }
  Vacancy.init({
    nameVacancy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Vacancy',
  });
  return Vacancy;
};