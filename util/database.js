const Sequelize = require('sequelize');

const db = 'mysql';
const user = 'root';
const password = '12345';
const host = 'localhost';

const sequelize = new Sequelize(db, user, password, {
  dialect: 'mysql',
  host,
});

module.exports = sequelize;
