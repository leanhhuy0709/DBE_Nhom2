const express = require('express');
const route = express.Router();

const workerController = require("../controllers/workerController");

route.get('/',workerController.index);

module.exports = route;