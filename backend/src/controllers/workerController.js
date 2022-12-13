class WorkerController{
    index(req,res){
        res.send("worker'home")
    }
}
module.exports = new WorkerController;