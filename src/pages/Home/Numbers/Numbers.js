import React from "react";

import Component from "./Component/Component";
import "./NumberStyle.scss";

export default class Numbers extends React.Component {
	render() {
		return (
			<div className="Numbers box">
				<Component />
			</div>
		);
	}
}
