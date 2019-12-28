/* jshint indent: 2 */
const Sequelize = require("sequelize");
const db = require("../config/database");

  const Book =  db.define('book', {
    'b_ID': {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'b_Name': {
      type: Sequelize.STRING(45),
      allowNull: false,
      comment: "null"
    },
    'b_ISBN': {
      type: Sequelize.STRING(45),
      allowNull: false,
      comment: "null"
    },
    'b_description': {
      type: Sequelize.STRING(500),
      allowNull: true,
      comment: "null"
    },
    'Author_a_ID': {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      references: {
        model: 'author',
        key: 'a_ID'
      }
    },
    'Category_c_ID': {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      references: {
        model: 'category',
        key: 'c_ID'
      }
    }
  }, {
    tableName: 'book'
  });

  module.exports = Book;
