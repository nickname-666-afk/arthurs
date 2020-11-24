import React from "react";

export default class Start extends React.Component {
	render() {
		return (
			<div className="Start">
				<div className="content">
					{this.props.text}
					{this.props.icons}
					{this.props.phone}
					{this.props.button}
				</div>
			</div>
		);
	}
}
