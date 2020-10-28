import React from "react";

import ChildRegistration from "./Component/ChildRegistration";

import "./RegStyle.scss";

export default class Registration extends React.Component {
	render() {
		return (
			<div className="Registration" href="/registration">
				<ChildRegistration />
			</div>
		);
	}
}
