const express = require('express');
const route = express.Router();

const managerController = require("../controllers/managerController");


route.get('/project',managerController.showProject);
route.get('/product',managerController.showProduct);
route.get('/group',managerController.showActivity);
route.get('/model',managerController.showUser);
route.get('/',managerController.index);


module.exports = route;