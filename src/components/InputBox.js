import React, {Component} from "react";

class InputBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			entry: "",
			id: this.props.todos.length
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						className="form-control inputBox"
						type="text"
						name="entry"
						placeholder="add a new entry.."
						onChange={this.handleChange}
						autoFocus={true}
						autoComplete={false}
					/>
				</form>
			</div>
		);
	}

	handleChange(event) {
		const {name, value} = event.target;
		this.setState({
			[name]: value
		});
	}

	handleSubmit(event) {
		this.setState({
			id: this.state.id + 1
		});
		this.props.newEntry(this.state.entry, this.state.id);
		event.preventDefault();
	}
}

export default InputBox;
