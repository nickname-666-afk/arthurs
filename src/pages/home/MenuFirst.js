import React from "react";

import Button from ".././../assets/component/button/Button";
import image from "../../assets/images/6.png";

const text = [
	<div className="text" key={10}>
		<div className="title">Столовая</div>
		<div className="title_p">
			<div className="p">
				В нашей гостинице работает ресторан, в котором вы сможете вкусно поесть и хорошо провести
				время! <br />
				Здесь какой-то текст о том, как все вкусно и классно. <br />
				Какие свежие продукты, какие рецепты, какой повар - все супер. Завтраки, ужины и все такое
			</div>
		</div>
		<Button />
	</div>,
];

export default class MenuFirst extends React.Component {
	render() {
		return (
			<div className="MenuFirst box">
				<div className="content">
					{text}
					<div className="image">
						<img src={image} alt="Изображение" />
					</div>
				</div>
			</div>
		);
	}
}
