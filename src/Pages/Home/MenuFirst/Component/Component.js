import React from "react";

import Text from "./Text";
import image from "../../../../Common/image/6.png";

const Component = () => {
	return (
		<div className="content">
			<Text />
			<div className="image">
			<img src={image} alt="Изображение" />
			</div>
		</div>
	);
};

export default Component;
