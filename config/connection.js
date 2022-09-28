require('dotenv').config();

const Sequelize = require('sequelize');

let sequelize;

/// Why does the process.env not work properly?
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    // process.env.DB_NAME,
    // process.env.DB_USER,
    // process.env.DB_PASSWORD,

    "pokemon_db","root","",


    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
} 






module.exports = sequelize;