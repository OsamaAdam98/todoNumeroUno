const router = require("express").Router();
let Todos = require("../models/todo.model");

router.get("/", (req, res) => {
	Todos.find()
		.then((todos) => res.json(todos))
		.catch((err) => res.status(400).json(`Error: ${err}`));
});

router.post("/add", (req, res) => {
	const title = req.body.title;
	const completed = req.body.completed;

	const newTodo = new Todos({
		title,
		completed
	});

	newTodo
		.save()
		.then(() => res.json(`Entry saved.`))
		.catch((err) => res.status(400).json(`Error: ${err}`));
});

router.delete("/:id", (req, res) => {
	Todos.findByIdAndDelete(req.params.id)
		.then(() => res.json(`Entry deleted`))
		.catch((err) => res.status(400).json(`Error: ${err}`));
});

router.post("/update/:id", (req, res) => {
	Todos.findById(req.params.id)
		.then((todo) => {
			todo.title = req.body.title;
			todo.completed = req.body.completed;

			todo
				.save()
				.then(() => res.json("Entry updated."))
				.catch((err) => res.status(400).json(`Error: ${err}`));
		})
		.catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
