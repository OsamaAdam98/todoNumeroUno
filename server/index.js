const express = require("express");
const todosData = require("./database/todosData.json");
const fs = require("fs");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/api/todosData", (req, res) => {
	console.log(`received a request from ${req.url}`);
	res.setHeader("Content-Type", "application/json");
	res.send(JSON.stringify(todosData));
});

app.post("/api/todosData", (req, res) => {
	fs.writeFile(
		__dirname + "/database/todosData.json",
		JSON.stringify(req.body),
		() => res.sendStatus(200)
	);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
