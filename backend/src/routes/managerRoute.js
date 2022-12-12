const express = require('express');
const route = express.Router();

const managerController = require("..\\controllers\\managerController");

route.get('/project',managerController.showProject);
route.get('/employee',managerController.showEmployee);
route.get('/product',managerController.showProduct);
route.get('/activity',managerController.showActivity);
route.get('/',managerController.index);

module.exports = route;