const mysql = require("mysql");
require("dotenv").config();

let connection = "";

const connectDB = async (user) => {
  connection = mysql.createConnection({
    host: "localhost",
    user: user.DB_USERNAME,
    password: user.DB_PASSWORD,
    database: user.DB_NAME,
    multipleStatements: true
})
  return connection.connect();
};

module.exports = {connectDB, connection};
