const sequelize = require('./util/database');

const Customer = require('./models/customer');
const Order = require('./models/order');

Customer.hasMany(Order);

sequelize
  .sync({ force: true })
  .then((result) => {
    return Customer.create({ name: 'Chandler Bing', email: 'cb@gmail.com' });
  })
  .then((customer) => {
    console.log({ customer });
    return Order.create({ total: 45 });
  })
  .then((order) => {
    console.log({ order });
  })
  .catch((err) => {
    console.log(err);
  });
