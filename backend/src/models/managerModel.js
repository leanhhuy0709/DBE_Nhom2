const {connection} = require('../db/connect')

const getProject = () => {
    var query = "call ShowProject();"
    return new Promise((resolve, reject) => {
      connection.query(query, (err, result) => {
        if (err) reject(err);
        else resolve(result)
      })
    })
  }

  const getProjectInfo = (pid) => {
    let query = "call get_group_of_project(?);"
    const group = connection.query(query, [pid]);

    query = "call get_leader_of_project(?);"
    const leader = connection.query(query, [pid]);

    query = "call get_model_of_project(?);"
    const model = connection.query(query, [pid]);

    query = "call get_supplier_of_project(?);"
    const supplier = connection.query(query, [pid]);

    return Promise.all({group : group, model : model, supplier : supplier, leader : leader})
  }

  const delProject = (pid) => {
    var query = "call RemoveProject(?);"
    return new Promise((resolve, reject) => {
      connection.query(query, [pid], (err, result) => {
        if (err) reject(err);
        else resolve(result)
      })
    })
  }

  const addNewProject = (project) => {
    var query = "call insert_project(?, ?, ?, ?);"
    return new Promise((resolve, reject) => {
      connection.query(query, project, (err, result) => {
        if (err) reject(err);
        else resolve(result)
      })
    })
  }

  const getEmployee = () => {
    var query = "call ShowEmployee();"
    return new Promise((resolve, reject) => {
      connection.query(query, (err, result) => {
        if (err) reject(err);
        else resolve(result)
      })
    })
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