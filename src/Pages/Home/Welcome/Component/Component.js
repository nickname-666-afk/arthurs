import React from "react";

import Text from "./Text";
import Image from "./Image";
import Info from "./Info";

const Component = () => {
	return (
		<div className="content">
			<div className="title">Добро пожаловать в ARTHUR’S!</div>
			<div className="left">
				<Text />
				<a href="/rooms">
					<button type="button" className="button">Наши номера</button>
				</a>
			</div>
			<div className="right">
				<Image />
				<Info />
			</div>
		</div>
	);
};

export default Component;
