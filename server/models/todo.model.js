const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	completed: {
		type: Boolean,
		required: true
	}
});

const Todo = mongoose.model("todo", todoSchema);

module.exports = Todo;
