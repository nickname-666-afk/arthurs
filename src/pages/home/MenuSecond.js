import React from "react";

import Button from "../../elem/button/Button";
import image from "../../assets/images/7.png";

const text = [
	<div className="text" key={11}>
		<div className="title">Кафе-шашлычная</div>
		<div className="title_p">
			<div className="p">
				Барная карта ресторана представлена хорошим выбором алкоголя (коньяк, виски, ром, водка,
				текила, шампанское), есть отдельная винная карта. В Баре по фирменным рецептам готовят
				лимонады и морсы. В карте бара также имеется большой выбор кофе и чая.В баре заведения могут
				приготовить как напитки, которые известны на весь мир
			</div>
		</div>
		<Button />
	</div>,
];

export default class MenuSecond extends React.Component {
	render() {
		return (
			<div className="MenuSecond box">
				<div className="content">
					<div className="image">
						<img src={image} alt="Изображение" />
					</div>
					{text}
				</div>
			</div>
		);
	}
}
