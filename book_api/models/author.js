/* jshint indent: 2 */
const Sequelize = require("sequelize");
const db = require("../config/database");


  const Author =  db.define('author', {
    'a_ID': {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'a_Name': {
      type: Sequelize.STRING(45),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'author'
  });

  module.exports = Author;
