const Sequelize = require("sequelize");
const db = require("../config/database");

  const Book_type = db.define('book_type', {
    'bt_ID': {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'bt_Name': {
      type: Sequelize.STRING(45),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'book_type'
  });

  module.exports = Book_type;
