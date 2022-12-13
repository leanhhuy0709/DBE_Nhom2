const Designer = require('../models/designerModel');

class DesignerController {
  index(req, res) {
   res.send("home designer")
  }

  project(req, res) {
    Designer.project(req.body, (result) => {
        res.send(result);
    });
  }

  product(req, res) {
    Designer.product(req.body, (result) => {
        res.send(result);
    });
  }

  model(req, res) {
    Designer.model(req.body, (result) => {
        res.send(result);
    });
  }

  group(req, res) {
    Designer.group(req.body, (result) => {
        res.send(result);
    });
  }
}
module.exports = new DesignerController();
