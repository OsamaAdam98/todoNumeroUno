const express = require("express");
const os = require("os");
const todosData = require("./todosData.json");
const app = express();

app.get("/api/todosData", (req, res) => {
	res.setHeader("Content-Type", "application/json");
	res.json(todosData);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
	console.log(`Server started on ${os.hostname()}:${PORT}`)
);
