/* jshint indent: 2 */
const Sequelize = require("sequelize");
const db = require("../config/database");

  const Category =  db.define('category', {
    'c_ID': {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'c_Name': {
      type: Sequelize.STRING(45),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'category'
  });

  module.exports = Category;
