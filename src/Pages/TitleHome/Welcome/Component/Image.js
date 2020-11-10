import React from "react";

import Welcome from "../../../../Common/image/1.png";

export default class Image extends React.Component {
	render() {
		return (
			<div className="image">
				<img src={Welcome} alt="Изображение" />
			</div>
		);
	}
}
