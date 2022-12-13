const db = require('../utils/connection');

console.log(db);
var connect = db.makeConnection('root','kimngan1704');
db.query('SELECT * FROM GROUP',
    (error) =>{
        if(error){
            console.log(error.message);
        }
        else
        {
            "Thanh cong"
        }
    });