const express = require('express');
const route = express.Router();

const designerController = require("../controllers/designerController");

route.get('/',designerController.index);

module.exports = route;