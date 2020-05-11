import React, { useState, useEffect } from "react";
import axios from "axios";
import CheckBox from "./CheckBox";
import InputForm from "./InputForm";
import LoadingPage from "./LoadingPage";

function HomePage() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`/todos/`)
      .then((res) => {
        setTodos(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(`Error: ${err}`));
  }, []);

  const handleRemove = (id) => {
    axios
      .delete(`/todos/${id}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(`Error: ${err}`));
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  const handleChange = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo._id === id) todo.completed = !todo.completed;
        return todo;
      })
    );
    const editEntry = todos.filter((todo) => todo._id === id);
    axios.post(`/todos/update/${id}`, editEntry[0]).then((res) => console.log(res.data));
  };

  const newEntry = (textEntry) => {
    const entry = {
      title: textEntry,
      completed: false
    };

    axios
      .post(`/todos/add/`, entry)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(`Error: ${err}`));
    setTodos([...todos, entry]);
  };

  const checkBoxComponent = todos.map((item, index) => (
    <CheckBox key={index} item={item} handleChange={handleChange} handleRemove={handleRemove} />
  ));

  if (isLoading) return <LoadingPage />;
  return (
    <div className="container-fluid">
      <InputForm newEntry={newEntry} todos={todos} />
      {checkBoxComponent}
    </div>
  );
}
export default HomePage;
