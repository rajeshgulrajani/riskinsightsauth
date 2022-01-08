module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define("customer", {
      userid: {
        type: Sequelize.INTEGER
      },
      firstname: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      }
    });
  
    return Customer;
  };