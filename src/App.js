import React from "react";
import "./App.css";
import "./bootstrap.min.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
	return (
		<div className="App container-full">
			<Header />
			<Main />
		</div>
	);
}

export default App;
