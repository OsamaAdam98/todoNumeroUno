import React, {useState, useEffect} from "react";
import CheckBox from "./CheckBox";
import InputForm from "./InputForm";
import LoadingPage from "./LoadingPage";

function HomePage() {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		fetch("/api/todosData")
			.then((res) => res.json())
			.then((resData) => {
				setTodos(resData);
				setIsLoading(false);
			});
	}, []);

	useEffect(() => {
		if (todos.length)
			fetch("/api/todosData", {
				method: "POST",
				body: JSON.stringify(todos),
				headers: {
					Accept: "application/json, text/plain, */*",
					"Content-Type": "application/json"
				}
			});
	}, [todos]);

	const flush = async () => {
		setTodos([]);
		fetch("/api/todosData", {
			method: "POST",
			body: JSON.stringify([]),
			headers: {
				Accept: "application/json, text/plain, */*",
				"Content-Type": "application/json"
			}
		});
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
				completed: false
			}
		]);
	};

	const checkBoxComponent = todos.map((item) => (
		<CheckBox key={item.id} item={item} handleChange={handleChange} />
	));

	if (isLoading) return <LoadingPage />;
	return (
		<div className="container-fluid">
			<InputForm newEntry={newEntry} todos={todos} flush={flush} />
			{checkBoxComponent}
		</div>
	);
}
export default HomePage;
