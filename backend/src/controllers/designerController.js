class DesignerController{
    index(req,res){
        res.send("designer'home")
    }
}
module.exports = new DesignerController;