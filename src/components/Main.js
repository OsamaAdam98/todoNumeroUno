import React, {useState} from "react";
import CheckBox from "./CheckBox";
import todosData from "./todosData";
import InputBox from "./InputBox";

function Main() {
	const [todos, setTodos] = useState(todosData);

	const handleChange = (id) => {
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) todo.completed = !todo.completed;
				return todo;
			})
		);
	};

	const newEntry = (textEntry, itemID) => {
		setTodos(
			todos.concat({
				id: itemID,
				entry: textEntry,
				completed: false
			})
		);
	};

	const checkBoxComponent = todos.map((item) => (
		<CheckBox key={item.id} item={item} handleChange={handleChange} />
	));

	return (
		<div className="container-fluid">
			<InputBox newEntry={newEntry} todos={todos} />
			{checkBoxComponent}
		</div>
	);
}
export default Main;
