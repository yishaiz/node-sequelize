const sequelize = require('./util/database');

const Customer = require('./models/customer');
const Order = require('./models/order');

Customer.hasMany(Order);

sequelize
  .sync({ force: true })
  .then((result) => {
    return Customer.create({ name: 'Chandler Bing', email: 'cb@gmail.com' });
    // console.log(result);
  })
  .then((customer) => {
    console.log({ customer });
  })
  .catch((err) => {
    console.log(err);
  });
