import React, {useState, useEffect} from "react";
import CheckBox from "./CheckBox";
import InputBox from "./InputBox";
import axios from "axios";

function Main() {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/todos?_limit=4")
			.then((response) => {
				setTodos(response.data);
				setIsLoading(false);
			});
	}, []);

	const handleChange = (id) => {
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) todo.completed = !todo.completed;
				return todo;
			})
		);
	};

	const newEntry = (textEntry) => {
		setTodos(
			todos.concat({
				id: todos.length + 1,
				title: textEntry,
				completed: false,
			})
		);
	};

	const checkBoxComponent = todos.map((item) => (
		<CheckBox key={item.id} item={item} handleChange={handleChange} />
	));

	if (isLoading) {
		return (
			<div className="justify-content-center d-flex">
				<div
					className="spinner-border"
					style={{width: "100px", height: "100px"}}
					role="status"
				>
					<span className="sr-only">Loading..</span>
				</div>
			</div>
		);
	}
	return (
		<div className="container-fluid">
			<InputBox newEntry={newEntry} todos={todos} />
			{checkBoxComponent}
		</div>
	);
}
export default Main;
