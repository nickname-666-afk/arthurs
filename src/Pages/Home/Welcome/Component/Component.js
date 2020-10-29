import React from "react";

import Text from "./Text";
import Image from "./Image";
import Info from "./Info";

export default class Component extends React.Component {
	render() {
		return (
			<div className="content">

				<div className="left">
					<Text />
					<Image />
				</div>
				<div className="right">
					<Info />
					<a href="/rooms">
						<button type="button" className="button">
							Наши номера
						</button>
					</a>
				</div>
			</div>
		);
	}
}
