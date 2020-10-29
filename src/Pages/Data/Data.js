import React from "react";

import "./DataStyle.scss";
import {Link} from "react-router-dom";
import Calendar from "../../Common/Component/Filter/Calendar";

export default class Data extends React.Component {
	render() {
		return (
			<div className="Data">
				<div className="component">
					<div className="title">Выберите дату</div>
					<div className="calendar">
						<Calendar />
					</div>
					<Link to="/service">
						<button className="button">Найти номер</button>
					</Link>
				</div>
				<div className="text">
					<div className="wrapper-text">
						<div className="title">Бронирование</div>
						<div className="p_first">Отель ARTHUR’S всегда рад гостям!</div>
						<div className="p">
							Звоните нам <br /> +7 958 756-80-39 <br />и администратор оперативно забронирует для
							Вас номер в нашем отеле. Вы также можете воспользоваться формой бронирования.
						</div>
					</div>
				</div>
			</div>
		);
	}
}
