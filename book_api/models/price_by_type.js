/* jshint indent: 2 */
const Sequelize = require("sequelize");
const db = require("../config/database");

  Price_by_type =  db.define('price_by_type', {
    'pbt_ID': {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'Price': {
      type: Sequelize.DECIMAL,
      allowNull: true,
      comment: "null"
    },
    'Book_b_ID': {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      references: {
        model: 'book',
        key: 'b_ID'
      }
    },
    'Book_Type_bt_ID': {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      comment: "null",
      references: {
        model: 'book_type',
        key: 'bt_ID'
      }
    }
  }, {
    tableName: 'price_by_type'
  });

  module.exports = Price_by_type;
