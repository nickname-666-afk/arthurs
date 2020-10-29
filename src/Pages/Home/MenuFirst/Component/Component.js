import React from "react";

import Text from "./Text";
import image from "../../../../Common/image/6.png";

export default class Component extends React.Component {
	render() {
		return (
			<div className="content">
				<Text />
				<div className="image">
					<img src={image} alt="Изображение" />
				</div>
			</div>
		);
	}
}
