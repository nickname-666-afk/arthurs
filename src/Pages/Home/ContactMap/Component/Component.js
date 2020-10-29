import React from "react";

import Text from "./Text";
import Maps from "./Maps";

export default class Component extends React.Component {
	render() {
		return (
			<div className="content">
				<Maps />
				<Text />
			</div>
		);
	}
}
