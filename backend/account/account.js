
const analyst = [
    {
        username: "analyst",
        password: "123456",
        role: "analyst",
        DB_USERNAME: "root",
        DB_PASSWORD : "1234",
        DB_NAME : "company"
    }
];
const manager = [
    {
        username: "manager",
        password: "123456",
        role: "manager",
        DB_USERNAME: "root",
        DB_PASSWORD : "1234",
        DB_NAME : "company"
    }
];
const worker = [
    {
        username: "worker",
        password: "123456",
        role: "worker",
        DB_USERNAME: "root",
        DB_PASSWORD : "1234",
        DB_NAME : "company"
    }
];
const designer = [
    {
        username: "designer",
        password: "123456",
        role: "designer",
        DB_USERNAME: "root",
        DB_PASSWORD : "1234",
        DB_NAME : "company"
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