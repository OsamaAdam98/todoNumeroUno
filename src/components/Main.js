import React, {useState, useEffect} from "react";
import CheckBox from "./CheckBox";
import InputBox from "./InputBox";
import LoadingPage from "./LoadingPage";
import axios from "axios";

function Main() {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		axios
			.get("/api/todosData")
			.catch((error) => console.log(error))
			.then((response) => setTodos(response.data))
			.then(() => setIsLoading(false));
	}, []);

	useEffect(() => {
		if (todos.length)
			axios.post("/api/todosData", todos).catch((error) => console.log(error));
	}, [todos]);

	const flush = async () => {
		await setTodos([]);
		axios.post("/api/todosData", []).catch((error) => console.log(error));
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
	};

	const checkBoxComponent = todos.map((item) => (
		<CheckBox key={item.id} item={item} handleChange={handleChange} />
	));

	if (isLoading) return <LoadingPage />;
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
export default Main;
