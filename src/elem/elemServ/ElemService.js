import React from "react";
import accessory from "../../assets/images/5(1).png";
import breakfast from "../../assets/images/5(2).png";
import transfer from "../../assets/images/5(3).png";
import bunk from "../../assets/images/5(4).png";

export default class ElemServ extends React.Component {
	render() {
		const button = (
			<button className="button" onClick={this.handleChange}>
				Добавить
			</button>
		);
		return (
			<div className="wrapper-serv">
				<div className="content-column">
					<div className="content">
						<div className="image">
							<img src={accessory} alt="Изображение" />
						</div>
						<div className="text">
							<div className="title">
								Банные <br /> принадлежности
							</div>
							<div className="info">Халат, тапочки, дополнительные полотенца</div>
							<div className="price">
								<b>{this.props.service.accessory}</b> р/набор
							</div>
							{button}
						</div>
					</div>
					<div className="content">
						<div className="image">
							<img src={breakfast} alt="Изображение" />
						</div>
						<div className="text">
							<div className="title">Завтрак</div>
							<div className="info">Комплексный завтрак на 1 человека На выбор из меню</div>
							<div className="price">
								<b>{this.props.service.breakfast}</b> р/в день на человека
							</div>
							{button}
						</div>
					</div>
				</div>
				<div className="content-column">
					<div className="content">
						<div className="image">
							<img src={transfer} alt="Изображение" />
						</div>
						<div className="text">
							<div className="title">Трафнсфер до отеля</div>
							<div className="info">Трансфер от вокзала до отеля в комфортном автомобиле</div>
							<div className="price">
								<b>{this.props.service.transfer}</b> р
							</div>
							{button}
						</div>
					</div>
					<div className="content addBed">
						<div className="image">
							<img src={bunk} alt="Изображение" />
						</div>
						<div className="text">
							<div className="title">Дополнительная кровать</div>
							<div className="info">Трансфер от вокзала до отеля в комфортном автомобиле</div>
							<div className="price">
								от <b>{this.props.service.bunk}</b> р
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
