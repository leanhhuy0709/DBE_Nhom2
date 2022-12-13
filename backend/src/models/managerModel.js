const { makeConnection } = require("../utils/connection");

const connect = makeConnection("root", "kimngan1704");

async function getProjectTable() {
  db = await connect;
  //strQurery = 'call ShowProject();';
  strQurery = "select * from Project;";
  return db
    .query(strQurery)
    .then(([data, _]) => data)
    .catch(console.log);
}

async function getProductTable() {
  db = await connect;
  strQurery = "call ShowProduct();";
  return db
    .query(strQurery)
    .then(([data, _]) => data)
    .catch(console.log);
}

async function getActivityTable() {
  db = await connect;
  strQurery = "call ShowActivity();";
  return db
    .query(strQurery)
    .then(([data, _]) => data)
    .catch((e) => {
      console.log(e);
      return null;
    });
}

async function deleteProject(PID) {
  db = await connect;
  strQurery = `call RemoveProject(${PID});`;
  return db
    .query(strQurery)
    .then((_) => true)
    .catch((e) => {
      console.log("Không thể delete project", PID);
      console.log(e);
      return false;
    });
}

async function insertProject(data) {
  const { PID, Name, Description, CostEfficiency, Cost } = data;
  db = await connect;
  strQurery = `call insert_project(${PID},'${Name}','${Description}','${CostEfficiency}',${Cost});`;
  return db
    .query(strQurery)
    .then((_) => true)
    .catch((e) => {
      console.log("Không thể insert project", Name);
      console.log(e);
      return false;
    });
}

//id, Name, start day, period, role
async function getLeaderOFProject(Name) {
  db = await connect;
  strQurery = `call get_leader_of_project('${Name}');`;
  return db
    .query(strQurery)
    .then(([data, _]) => data)
    .catch((e) => {
      console.log(e);
      return null;
    });
}

  const getProjectGroup = (pid) => {
    let query = "call get_group_of_project(?);"
    return new Promise((resolve, reject) => {
      connection.query(query, [pid], (err, result) => {
        if (err) reject(err);
        else resolve(result)
      })
    })
  }

    query = "call get_leader_of_project(?);"
    const leader = connection.query(query, [pid]);

    query = "call get_model_of_project(?);"
    const model = connection.query(query, [pid]);

    query = "call get_supplier_of_project(?);"
    const supplier = connection.query(query, [pid]);

    return Promise.all({group : group, model : model, supplier : supplier, leader : leader})
  }

async function insertEmployee(data) {
  const { ID, SSN, FName, MName, LName, BDate, Address, Salary, EmployeeType } =
    data;
  db = await connect;
  strQurery = `call insert_employee('${ID}','${SSN}','${Fname}','${Mname}','${Lname}','${BDate}','${Address}','${Salary}','${EmployeeType}');`;
  return db
    .query(strQurery)
    .then((_) => true)
    .catch((e) => {
      console.log(e);
      return false;
    });
}

async function insertProduct(data) {
  const { ID, Name } = data;
  db = await connect;
  strQurery = `call insert_product(${ID},'${Name}');`;
  return db
    .query(strQurery)
    .then((_) => true)
    .catch((e) => {
      console.log(e);
      return false;
    });
}

async function deleteProduct(ID) {
  db = await connect;
  strQurery = `call RemoveProduct(${ID});`;
  return db
    .query(strQurery)
    .then((_) => true)
    .catch((e) => {
      console.log(e);
      return false;
    });
}

  const getProduct = () => {
    var query = "call ShowProduct();"
    return new Promise((resolve, reject) => {
      connection.query(query, (err, result) => {
        if (err) reject(err);
        else resolve(result)
      })
    })
  }
module.exports = {
    getProject,
    addNewProject,
    delProject,
    getProjectInfo,
    getEmployee,
    getProduct
}
