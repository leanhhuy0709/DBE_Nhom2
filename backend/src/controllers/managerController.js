// const managerModel = require('..\\models\\managerModel');

module.exports.index = async (req,res) => {
        res.send("manager'home")
}

module.exports.showProject = async (req,res) => {
        res.send({'manager view Project page':data})
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
