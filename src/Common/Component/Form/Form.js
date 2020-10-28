import React from "react";

import "./FormStyle.scss";
export default class Form extends React.Component {
	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	handleSubmit(event) {
		alert("A name was submitted: " + this.state.value);
		event.preventDefault();
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>Name:</label>
				<input
					type="text"
					// value={this.state.value}
					onChange={this.handleChange}
				/>
			</form>
		);
	}
}
