const managerModel = require('..\\models\\managerModel');
//write by Huyyyyy
//const {connectDB} = require("../db/connect");
//

module.exports.index = async (req,res) => {
        res.send("manager'home")
}

module.exports.showProject = async (req,res) => {
        //console.log(req.user);
        managerModel.getProjectTable().then((data)=>{
                console.log(data)
                res.send(data);

        });
        //res.send({"msg": "Project Data"})
        //res.send({'manager view Project page':data})
}

module.exports.showLeaderOfProject = async (req,res) => {
        res.send({'manager view Project page':data})
}

module.exports.showModelOfProject = async (req,res) => {
        res.send({'manager view Project page':data})
}

module.exports.showGroupOfProject = async (req,res) => {
    res.send({'manager view Project page':data})
}

module.exports.showOfProject = async (req,res) => {
    res.send({'manager view Project page':data})
}


module.exports.showEmployee=async (req,res)=>{
        res.send('manager view Employee page')
}

module.exports.showProduct=async function (req,res){
        res.send('manager view Product page')
}

module.exports.showActivity= async function (req,res){
        res.send('manager view Activity page')
    }
