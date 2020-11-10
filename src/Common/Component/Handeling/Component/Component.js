import React from "react";

import first from "../../../image/5(1).png";
import second from "../../../image/5(2).png";
import third from "../../../image/5(3).png";
import fourth from "../../../image/5(4).png";

const Component = () => {
	return (
		<div className="content-main">
			<div className="title">Услуги</div>
			<div className="content-column">
				<div className="content">
					<div className="image">
						<img src={first} alt="Изображение" />
					</div>
					<div className="text">
						<div className="title">
							Банные <br /> принадлежности
						</div>
						<div className="info">Халат, тапочки, дополнительные полотенца</div>
						<div className="price">
							<b>350</b> р/набор
						</div>
					</div>
				</div>
				<div className="content">
					<div className="image">
						<img src={second} alt="Изображение" />
					</div>
					<div className="text">
						<div className="title">Завтрак</div>
						<div className="info">Комплексный завтрак на 1 человека На выбор из меню</div>
						<div className="price">
							<b>300</b> р/в день на человека
						</div>
					</div>
				</div>
			</div>
			<div className="content-column">
				<div className="content">
					<div className="image">
						<img src={third} alt="Изображение" />
					</div>
					<div className="text">
						<div className="title">Трафнсфер до отеля</div>
						<div className="info">Трансфер от вокзала до отеля в комфортном автомобиле</div>
						<div className="price">
							<b>200</b> р
						</div>
					</div>
				</div>
				<div className="content">
					<div className="image">
						<img src={fourth} alt="Изображение" />
					</div>
					<div className="text">
						<div className="title">Дополнительная кровать</div>
						<div className="info">Трансфер от вокзала до отеля в комфортном автомобиле</div>
						<div className="price">
							от <b>400</b> р
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Component;
