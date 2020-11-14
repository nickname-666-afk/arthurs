import React from "react";

import image from "../../../../assets/images/7.png";
import Text from "./Text";

export default class Component extends React.Component {
	render() {
		return (
			<div className="content">
				<div className="image">
					<img src={image} alt="Изображение" />
				</div>
				<Text />
			</div>
		);
	}
}
