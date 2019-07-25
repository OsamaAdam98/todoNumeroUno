import React, {useState} from "react";
function InputBox(props) {
	const [entry, setEntry] = useState("");
	const [id, setID] = useState(props.todos.length);

	const handleSubmit = event => {
		setID(id + 1);
		props.newEntry(entry, id);
		event.preventDefault();
	};
	const handleChange = event => {
		setEntry(event.target.value);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					className="form-control inputBox"
					type="text"
					name="entry"
					value={entry}
					placeholder="add a new entry.."
					onChange={handleChange}
					autoFocus={true}
					autoComplete="false"
				/>
			</form>
		</div>
	);
}

export default InputBox;
