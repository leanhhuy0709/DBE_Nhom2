const managerRoute = require(".\\managerRoute.js");
const workerRoute = require(".\\workerRoute.js");
const designerRoute = require(".\\designerRoute.js");
const userRoute = require(".\\userRoute.js");

function route(app){
    app.use('/manager',managerRoute)
    app.use('/designer',workerRoute)
    app.use('/worker',designerRoute)
    app.use('/user',userRoute)
}

module.exports = route;