import React from "react";

import first from "../../images/5(1).png";
import second from "../../images/5(2).png";
import third from "../../images/5(3).png";
import fourth from "../../images/5(4).png";
import "./HandelingStyle.scss";

export default class Handeling extends React.Component {
	isButton = window.location.pathname.includes("/home");
	bStyle = this.isButton ? {display: "none"} : {display: "inline"};
	constructor(props) {
		super(props);
		this.state = {fisrtPrice: 300, secondPrice: 350, thirdPrice: 200, fourthPrice: 400, count: 0};
	}
	handleClick = () => {
		this.setState({count: this.state.fisrtPrice});
	};

	render() {
		console.log(this.state.fisrtPrice);
		const button = (
			<button className="button" style={this.bStyle} onClick={this.props.handlePrice}>
				Добавить
			</button>
		);
		return (
			<div className="Handeling box" id="handeling">
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
									<b>{this.state.fisrtPrice}</b> р/набор
								</div>
								{button}
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
									<b>{this.state.secondPrice}</b> р/в день на человека
								</div>
								{button}
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
									<b>{this.state.thirdPrice}</b> р
								</div>
								{button}
							</div>
						</div>
						<div className="content addBed">
							<div className="image">
								<img src={fourth} alt="Изображение" />
							</div>
							<div className="text">
								<div className="title">Дополнительная кровать</div>
								<div className="info">Трансфер от вокзала до отеля в комфортном автомобиле</div>
								<div className="price">
									от <b>{this.state.fourthPrice}</b> р
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
