import React from "react";
import {Link} from "react-router-dom";

const locationRooms = {
	pathname: "/rooms",
};

const MenuList = () => {
	return (
		<ul>
			<li>
				<Link className="link" to={locationRooms}>
					Номера и цены
				</Link>
			</li>
			<li>
				<Link className="link" to={locationRooms}>
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
};

export default MenuList;
