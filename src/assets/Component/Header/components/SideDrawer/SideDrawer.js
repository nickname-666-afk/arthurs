import React from "react";
import {Link} from "react-router-dom";

import "./SideDrawer.scss";

const home = {
	pathname: "/home",
};
const rooms = {
	pathname: "/rooms",
};

export default class sideDrawer extends React.Component {
	render() {
		return (
			<nav className="side-drawer">
				<ul>
					<div>
						<Link className="link" to={home}>
							Главная
						</Link>
					</div>
					<div>
						<Link className="link" to={rooms}>
							Номера и цены
						</Link>
					</div>
					<div>
						<Link className="link" to={rooms}>
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
