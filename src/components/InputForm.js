import React, {useState} from "react";
function InputForm(props) {
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
				<div className="input-group mb-3">
					<input
						className="form-control"
						type="text"
						name="entry"
						value={entry}
						placeholder="add a new entry.."
						onChange={handleChange}
						autoFocus={true}
						autoComplete="false"
					/>
				</div>
			</form>
		</div>
	);
}

export default InputForm;
