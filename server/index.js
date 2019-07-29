const express = require("express");
const todosData = require("./database/todosData.json");
const fs = require("fs");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/api/todosData", (req, res) => {
	res.setHeader("Content-Type", "application/json");
	res.send(todosData);
});

app.post("/api/todosData", (req, res) => {
	const makeShiftData = JSON.parse(
		fs.readFileSync(__dirname + "/database/todosData.json", "utf8")
	);

	makeShiftData.push({
		userId: 1,
		id: req.body.id,
		title: req.body.title,
		completed: false,
	});

	fs.writeFileSync(
		__dirname + "/database/todosData.json",
		JSON.stringify(makeShiftData),
		"utf8"
	);
	console.log("written");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
