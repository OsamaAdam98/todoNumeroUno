import React, {useState, useEffect} from "react";
import CheckBox from "./CheckBox";
import InputBox from "./InputBox";
import axios from "axios";

function Main() {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		axios
			.get("/api/todosData")
			.catch((error) => console.log(error.response))
			.then((response) => {
				setTodos(response.data);
				setIsLoading(false);
			});
	}, []);

	const flush = () => {
		setTodos([]);
		axios
			.post("/api/todosData", [])
			.catch((error) => console.log(error.response));
	};

	const handleChange = (id) => {
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) todo.completed = !todo.completed;
				return todo;
			})
		);
	};

	const newEntry = (textEntry) => {
		setTodos([
			...todos,
			{
				userId: 1,
				id: todos.length + 1,
				title: textEntry,
				completed: false,
			},
		]);
		axios
			.post("/api/todosData", [
				...todos,
				{
					userId: 1,
					id: todos.length + 1,
					title: textEntry,
					completed: false,
				},
			])
			.catch((error) => console.log(error.response));
	};

	const checkBoxComponent = todos.map((item) => (
		<CheckBox key={item.id} item={item} handleChange={handleChange} />
	));

	if (isLoading) {
		return (
			<div className="justify-content-center d-flex">
				<div
					className="spinner-border"
					style={{width: "100px", height: "100px", marginTop: "100px"}}
					role="status"
				>
					<span className="sr-only">Loading..</span>
				</div>
			</div>
		);
	} else {
		return (
			<div className="container-fluid">
				<InputBox newEntry={newEntry} todos={todos} />
				{checkBoxComponent}
				<button className="btn btn-danger container-fluid mt-3" onClick={flush}>
					Flush
				</button>
			</div>
		);
	}
}
export default Main;
