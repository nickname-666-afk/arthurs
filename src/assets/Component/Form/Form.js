import React from "react";

import "./FormStyle.scss";
export default class Form extends React.Component {
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
