import React from "react";
import {Link} from "react-router-dom";

import "./SideDrawer.scss";
const locationHome = {
	pathname: "/home",
};
const locationRooms = {
	pathname: "/rooms",
};
export default class sideDrawer extends React.Component {
	render() {
		return (
			<nav className="side-drawer">
				<ul>
					<div>
						<Link className="link" to={locationHome}>
							Главная
						</Link>
					</div>
					<div>
						<Link className="link" to={locationRooms}>
							Номера и цены
						</Link>
					</div>
					<div>
						<Link className="link" to={locationRooms}>
							Забронировать
						</Link>
					</div>
					<div>
						<a className="link" href="#handeling">
							Услуги
						</a>
					</div>
					<div>
						<a className="link" href="#contact">
							Контакты
						</a>
					</div>
				</ul>
			</nav>
		);
	}
}
