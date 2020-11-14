import React from "react";
import {Link} from "react-router-dom";

const rooms = {
	pathname: "/rooms",
};

export default class MenuList extends React.Component {
	render() {
		return (
			<ul>
				<li>
					<Link className="link" to={rooms}>
						Номера и цены
					</Link>
				</li>
				<li>
					<Link className="link" to={rooms}>
						Забронировать
					</Link>
				</li>
				<li>
					<a className="link action" href="#handeling">
						Услуги
					</a>
				</li>
				<li>
					<a className="link action" href="#contact">
						Контакты
					</a>
				</li>
			</ul>
		);
	}
}
