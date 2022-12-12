var express = require("express");
var app = express();
const route = require(".\\src\\routes")
const {analyst, manager, worker, designer} = require("./account/account")


app.use(express.json());
route(app);

app.listen(5000, function () {
	console.log("Server is listening on port 5000!");
	console.log(analyst);
});
