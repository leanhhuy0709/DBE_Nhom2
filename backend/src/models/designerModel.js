const mysql = require("mysql");

const { connectSuccess } = require("../db/connect");
const user = {
  DB_USERNAME: "hung.bui@gmail.com",
  DB_PASSWORD: "123456",
  DB_NAME: "manufacturing",
};
const connection = connectSuccess(user);

// tai khoan khac dk
class Designer{};
const getProject = () => {
    console.log(connection);
    const query = "call ShowProject();";
    return new Promise((resolve, reject) => {
      connection.query(query, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  };

  