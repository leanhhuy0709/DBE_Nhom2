const managerRoute = require(".\\managerRoute.js");
const workerRoute = require(".\\workerRoute.js");
const designerRoute = require(".\\designerRoute.js");
const userRoute = require(".\\userRoute.js");
const authenRoute = require("./authenticateRoute");
const { authUser, authManger, authWorker, authAnalyst, authDesigner } = require('../middleware/authentication')
function route(app){
    app.use('/manager',authUser,authManger, managerRoute)
    app.use('/designer',workerRoute)
    app.use('/worker',designerRoute)
    app.use('/user',userRoute)
    app.use('/authen',authenRoute)
}

module.exports = route;