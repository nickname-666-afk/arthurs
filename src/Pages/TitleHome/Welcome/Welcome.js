import React from "react";

import Component from "./Component/Component";
import "./WelcomeStyle.scss";

export default class Welcome extends React.Component {
	render() {
		return (
			<div className="Welcome box">
				<div className="title">Добро пожаловать в ARTHUR’S!</div>
				<Component />
			</div>
		);
	}
}
