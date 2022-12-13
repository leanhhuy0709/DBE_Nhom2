const { makeConnection } = require("../utils/connection");

const connect = makeConnection('root','kimngan1704');


async function getProjectTable() {
    db =  await connect;
    //strQurery = 'call ShowProject();';
    strQurery = 'select * from Project;';
    return db.query(strQurery)
            .then(([data,_])=>data)
            .catch(console.log)
}

async function getProductTable() {
    db =  await connect;
    strQurery = 'call ShowProduct();';
    return db.query(strQurery)
            .then(([data,_])=>data)
            .catch(console.log)
}

async function getActivityTable() {
    db =  await connect;
    strQurery = 'call ShowActivity();';
    return db.query(strQurery)
            .then(([data,_])=>data)
            .catch(e=>{
                console.log(e);
                return null;
            })
}


async function deleteProject(PID){
    db =  await connect;
    strQurery = `call RemoveProject(${PID});`;
    return db.query(strQurery)
            .then((_) => true)
            .catch(e=>{
                console.log('Không thể delete project',PID);
                console.log(e);
                return false;
            })
}


async function insertProject(data){
    const {PID, Name, Description, CostEfficiency, Cost } = data;
    db =  await connect;
    strQurery = `call insert_project(${PID},'${Name}','${Description}','${CostEfficiency}',${Cost});`;
    return db.query(strQurery)
            .then((_) => true)
            .catch(e=>{
                console.log('Không thể insert project',Name);
                console.log(e);
                return false;
            })
}


//id, Name, start day, period, role
async function getLeaderOFProject(Name){
    db =  await connect;
    strQurery = `call get_leader_of_project('${Name}');`;
    return db.query(strQurery)
            .then(([data,_])=>data)
            .catch(e=>{
                console.log(e);
                return null;
            })
}

// id, number, date create, product id, designer id.
async function getModelOFProject(Name){
    db =  await connect;
    strQurery = `call get_model_of_project('${Name}');`;
    return db.query(strQurery)
            .then(([data,_])=>data)
            .catch(e=>{
                console.log(e);
                return null;
            })
}

//id, name, location, partid,date,quantity,price
async function getSupplierOFProject(Name){
    db =  await connect;
    strQurery = `call get_supplier_of_project('${Name}');`;
    return db.query(strQurery)
            .then(([data,_])=>data)
            .catch(e=>{
                console.log(e);
                return null;
            })
}

//number, name, location
async function getGroupOFProject(Name){
    db =  await connect;
    strQurery = `call get_group_of_project('${Name}');`;
    return db.query(strQurery)
            .then(([data,_])=>data)
            .catch(e=>{
                console.log(e);
                return null;
            })
}

async function getEmployeeTable() {
    db =  await connect;
    strQurery = 'call showEmployee();';
    return db.query(strQurery)
            .then(([data,_])=>data)
            .catch(console.log)
}

async function deleteEmployee(ID) {
    db =  await connect;
    strQurery = `delete RemoveEmployee(${ID});`;
    return db.query(strQurery)
            .then((_)=>true)
            .catch(e=>{
                console.log(e);
                return false;
            })
}

async function insertEmployee(data) {
    const {ID,SSN, FName,MName,LName,BDate, Address,Salary, EmployeeType } = data
    db =  await connect;
    strQurery = `call insert_employee('${ID}','${SSN}','${Fname}','${Mname}','${Lname}','${BDate}','${Address}','${Salary}','${EmployeeType}');`;
    return db.query(strQurery)
            .then((_)=>true)
            .catch(e=>{
                console.log(e);
                return false;
            })
}

async function insertProduct(data) {
    const {ID,Name} = data
    db =  await connect;
    strQurery = `call insert_product(${ID},'${Name}');`;
    return db.query(strQurery)
            .then((_)=>true)
            .catch(e=>{
                console.log(e);
                return false;
            })
}

async function deleteProduct(ID) {
    db =  await connect;
    strQurery = `call RemoveProduct(${ID});`;
    return db.query(strQurery)
            .then((_)=>true)
            .catch(e=>{
                console.log(e);
                return false;
            })
}

async function insertProduct(data) {
    const {ID,Name,PID} = data
    db =  await connect;
    strQurery = `call insert_product(${ID},'${Name}',${PID});`;
    return db.query(strQurery)
            .then((_)=>true)
            .catch(e=>{
                console.log(e);
                return false;
            })
}

async function deleteProduct(ID) {
    db =  await connect;
    strQurery = `call delete_product(${ID});`;
    return db.query(strQurery)
            .then((_)=>true)
            .catch(e=>{
                console.log(e);
                return false;
            })
}
