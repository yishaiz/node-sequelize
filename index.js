const sequelize = require('./util/database');

const Customer = require('./models/customer');
const Order = require('./models/order');

sequelize
  .sync({ force: true })
  .then((result) => {
    return Customer.create({ name: 'Chandler Bing', email: 'cb@gmail.com' });
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
