import React from "react";

import Component from "./Component/Component";
import "./ImageIconStyle.scss";

const ImageIcon = () => {
	return (
		<div className="IconImage box">
			<div className="content">
				<p className="title">Почему наши гости выбрают именно нас</p>
				<Component />
			</div>
		</div>
	);
};

export default ImageIcon;
