import React from "react";
import { Link } from "react-router-dom";
import main from "../../assets/images/main.jpg";

const Welcome = () => {
	return (
		<div className="Welcome box">
			<div className="title">Добро пожаловать в ARTHUR’S!</div>
			<div className="content_flex">
				<div className="flex">
					<div className="text">
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
						<div className="p">
							Отель ARTHURS станет лучшим местом для семейного отдыха в Крыму.
						</div>
					</div>
					<div className="image">
						<img src={main} alt="Изображение" />
					</div>
				</div>
				<div className="flex">
					<div className="wrapper-info">
						<div className="info">
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
						</div>
					</div>
					<div className="group-button">
						<Link className="link" to="/rooms">
							<button type="button" className="button">
								Забронировать
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Welcome;
