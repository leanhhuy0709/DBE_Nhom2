

const mysql = require("mysql");
require("dotenv").config();


const connectDB = async (user) => {
  const connection = mysql.createConnection({
    host: "localhost",
    user: user.DB_USERNAME,
    password: user.DB_PASSWORD,
    database: user.DB_NAME,
    multipleStatements: true
})
  return connection.connect();
};

module.exports = {connectDB};


/*

const mysql = require("mysql");
require("dotenv").config();


const connectDB = async (user) => {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "kimngan1704",
    database: "manufacturing",
    multipleStatements: true
})
  return connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
  
    var sql1 = "select * from project";
    var ans = "569";
    connection.query(sql1, function (err, result) {
        if (err) throw err;
        return result;
    })
    console.log(ans);
});
};

module.exports = {connectDB};
*/

