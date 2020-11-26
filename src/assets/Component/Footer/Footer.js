import React from "react";

export default class Footer extends React.Component {
	render() {
		return (
			<footer className="Footer">
				<div className="content">
					{this.props.sidebar}
					{this.props.address}
					{this.props.phone}
					{this.props.icons}
				</div>
			</footer>
		);
	}
}
