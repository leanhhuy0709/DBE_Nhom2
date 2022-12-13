const analyst = [
    {
        username: "huy1",
        password: "123456",
        role: "analyst",
        "id": "10",
        "ssn": "12312523",
        "fname": "Huy",
        "mname": "Anh",
        "lname": "Le",
        "bdate": "2002-09-07", 
        "address": "KTX",
        DB_USERNAME: "root",
        DB_PASSWORD : "1234",
        DB_NAME : "manufacturing",
    }
];
const manager = [
    {
        username: "huy2",
        password: "123456",
        role: "manager",
        "id": "10",
        "ssn": "12312523",
        "fname": "Huy",
        "mname": "Anh",
        "lname": "Le",
        "bdate": "2002-09-07", 
        "address": "KTX",
        DB_USERNAME: "root",
        DB_PASSWORD : "1234",
        DB_NAME : "manufacturing",
    }
];
const worker = [
    {
        username: "huy3",
        password: "123456",
        role: "worker",
        "id": "10",
        "ssn": "12312523",
        "fname": "Huy",
        "mname": "Anh",
        "lname": "Le",
        "bdate": "2002-09-07", 
        "address": "KTX",
        DB_USERNAME: "root",
        DB_PASSWORD : "1234",
        DB_NAME : "manufacturing",
    }
];
const designer = [
    {
        username: "huy4",
        password: "123456",
        role: "designer",
        "id": "10",
        "ssn": "12312523",
        "fname": "Huy",
        "mname": "Anh",
        "lname": "Le",
        "bdate": "2002-09-07", 
        "address": "KTX",
        DB_USERNAME: "root",
        DB_NAME : "manufacturing",
        DB_PASSWORD : "1234",
    }
];

function getUser(username, password){
    let result = null;
    analyst.forEach( (user)=>{
        if(user.username === username && user.password === password){
            result = user;
        }
    })
    manager.forEach( (user)=>{
        if(user.username === username && user.password === password){
            result = user;
        }
    })
    worker.forEach( (user)=>{
        if(user.username === username && user.password === password){
            result = user;
        }
    })
    designer.forEach( (user)=>{
        if(user.username === username && user.password === password){
            result = user;
        }
    })
    return result;
}

function getRole(username, password){
    const user = getUser(username, password);
    if(!user) return "nothing"
    return user.role;
}

module.exports = {getRole, getUser};