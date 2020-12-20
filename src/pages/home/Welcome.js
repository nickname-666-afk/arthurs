import React from "react";

import main from "../../assets/images/main.jpg";

const text = [
	<div className="text" key={7}>
		<div className="p">
			Современный и уютный отель, <br />
			расположенный на берегу моря,идеально подойдет для отдыха в Феодосии.
			<br />
			Мы позаботимся о том, чтобы Ваш отдых стал незабываемым! <br />
		</div>
		<br />
		<div className="p">
			Добро пожаловать в отель ARTHUR’S! <br />
			Отель "Артурс" подарит атфмосферу незабываемого отдыха на золотом пляже.
		</div>
		<br />
		<div className="p">Отель ARTHURS станет лучшим местом для семейного отдыха в Крыму.</div>
	</div>,
];
const image = [
	<div className="image" key={8}>
		<img src={main} alt="Изображение" />
	</div>,
];
const info = [
	<div className="info" key={9}>
		<div className="span">
			<div className="p">60</div>
			метров <br />
			до моря
		</div>
		<div className="span">
			<div className="p">33</div>
			номера
		</div>
		<div className="span">
			<div className="p">428</div>
			довольных <br />
			гостей
		</div>
		<div className="span">
			<div className="p">10</div>
			км до вокзала
		</div>
	</div>,
];

export default class Welcome extends React.Component {
	render() {
		return (
			<div className="Welcome box">
				<div className="title">Добро пожаловать в ARTHUR’S!</div>
				<div className="content">
					<div className="left">
						{text}
						{image}
					</div>
					<div className="right">
						<div className="wrapper-info">{info}</div>
						{this.props.button}
					</div>
				</div>
			</div>
		);
	}
}
