module.exports = {
  HOST: process.env.POSTGRES_HOST, // the host name MYSQL_DATABASE: node_mysql
  USER: process.env.POSTGRES_USER, // database user MYSQL_USER: MYSQL_USER
  PASSWORD: process.env.POSTGRES_PASSWORD, // database user password MYSQL_PASSWORD: MYSQL_PASSWORD
  DB: process.env.POSTGRES_DB, // database name MYSQL_HOST_IP: mysql_db
  dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };