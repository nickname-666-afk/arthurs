import React from "react";

import image from "../../../../Common/image/7.png";
import Text from "./Text";

const Component = () => {
	return (
		<div className="content">
			<div className="image"><img src={image} alt="Изображение" /></div>
			<Text />
		</div>
	);
};

export default Component;
