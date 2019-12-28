const Sequelize = require("sequelize");
module.exports = new Sequelize('books', 'root', '2597220Lf!', {
    host: 'localhost',
    dialect: 'mysql',
    operatoresAliases: false,
    define: {
        timestamps: false
    },
  
    pool: {
      max: 5,
      min: 0,
      acquire: 3000,
      idle: 10000
    },
  
  });
