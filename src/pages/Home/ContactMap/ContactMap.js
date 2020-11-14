import React from "react";

import Component from "./Component/Component";
import "./ContactMapStyle.scss";

export default class ContactMap extends React.Component {
	render() {
		return (
			<div className="ContactMap" id="contact">
				<Component />
			</div>
		);
	}
}
