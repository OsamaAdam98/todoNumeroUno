const express = require("express");
const fs = require("fs");

const app = express();

app.get("/api/todosData", (req, res) => {
	console.log(`received a get request from ${req.url}`);
	const todosDataRead = fs.createReadStream(
		__dirname + "/database/todosData.json",
		"utf8"
	);
	todosDataRead.pipe(res);
});

app.post("/api/todosData", (req, res) => {
	console.log(`received a post request from ${req.url}`);
	const todosDataWrite = fs.createWriteStream(
		__dirname + "/database/todosData.json"
	);
	req.pipe(todosDataWrite);
	res.status(200).send("Processing the post request");
});

const port = process.env.PORT || 4040;

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
