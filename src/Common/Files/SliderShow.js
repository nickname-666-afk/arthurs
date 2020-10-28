import React from "react";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import firstImage from "../image/lux.png";
import secondImage from "../image/delux.png";
import thirdImage from "../image/family.png";

const slideImages = [firstImage, secondImage, thirdImage];

const SliderShow = () => {
	return (
		<div className="slide-container">
			<Slide>
				<div className="each-slide">
					<div
						className="slide-show"
						style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
				</div>
				<div className="each-slide">
					<div
						className="slide-show"
						style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
				</div>
				<div className="each-slide">
					<div
						className="slide-show"
						style={{ backgroundImage: `url(${slideImages[2]})` }}></div>
				</div>
			</Slide>
		</div>
	);
};

export default SliderShow;
