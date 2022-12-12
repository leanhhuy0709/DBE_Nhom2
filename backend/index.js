var express = require("express");
var app = express();
const route = require(".\\src\\routes")


app.use(express.json());
route(app);

app.listen(5000, function () {
	console.log("Server is listening on port 5000!");
});
