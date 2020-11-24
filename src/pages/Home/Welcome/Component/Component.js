import React from "react";

export default class Component extends React.Component {
	render() {
		return (
			<div className="content">
				<div className="left">
					{this.props.text}
					{this.props.image}
				</div>
				<div className="right">
					{this.props.info}
					{this.props.button}
				</div>
			</div>
		);
	}
}
