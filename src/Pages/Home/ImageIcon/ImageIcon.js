import React from "react";

import Component from "./Component/Component";
import "./ImageIconStyle.scss";

export default class ImageIcon extends React.Component {
	render() {
		return (
			<div className="IconImage box">
				<div className="content">
					<p className="title">Почему наши гости выбрают именно нас</p>
					<Component />
				</div>
			</div>
		);
	}
}
