const express = require("express");
const todosData = require("./database/todosData.json");
const fs = require("fs");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/api/todosData", (req, res) => {
	res.setHeader("Content-Type", "application/json");
	console.log(todosData);
	res.send(todosData);
});

app.post("/api/todosData", (req, res) => {
	fs.writeFileSync(
		__dirname + "/database/todosData.json",
		JSON.stringify(req.body)
	);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
