import React from "react";

function CheckBox(props) {
	const entryStyle = {
		textDecorationLine: props.item.completed ? "line-through" : null,
		color: props.item.completed ? "grey" : null
	};
	return (
		<div>
			<ul className="list-group">
				<li
					className="list-group-item list-group-item-action chBoxList"
					onClick={() => props.handleChange(props.item.id)}
				>
					<label
						htmlFor={props.item.id}
						style={entryStyle}
						className="chBoxLabel"
					>
						<input
							className="chBox"
							type="checkbox"
							id={props.item.id}
							checked={props.item.completed}
							onChange={() => props.handleChange(props.item.id)}
						/>

						{props.item.entry}
					</label>
				</li>
			</ul>
		</div>
	);
}

export default CheckBox;
