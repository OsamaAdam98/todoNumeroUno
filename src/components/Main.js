import React, {useState, useEffect} from "react";
import CheckBox from "./CheckBox";
import InputBox from "./InputBox";

function Main() {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
			.then((response) => response.json())
			.then((json) => setTodos(json));
	}, []);

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
				title: textEntry,
				completed: false,
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
