const express = require("express");
const route = express.Router();

const designerController = require("../controllers/designerController");

route.get("/", designerController.index);
route.get("/project", designerController.project);
route.get("/product", designerController.product);
route.get("/group", designerController.group);
route.get("/model", designerController.model);

module.exports = route;
