import React, {useState} from "react";
function InputBox(props) {
	const [entry, setEntry] = useState("");

	const handleSubmit = (event) => {
		if (entry.trim()) props.newEntry(entry);
		event.preventDefault();
	};
	const handleChange = (event) => {
		setEntry(event.target.value);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					className="form-control inputBox mb-3"
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
