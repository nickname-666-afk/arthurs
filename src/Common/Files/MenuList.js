import React from "react";

const MenuList = () => {
	return (
		<ul>
			<li>
				<a className="link" href="/rooms">
					Номера и цены
				</a>
			</li>
			<li>
				<a className="link" href="/rooms">
					Забронировать
				</a>
			</li>
			<li>
				<a className="link action" href="/#handeling">
					Услуги
				</a>
			</li>
			<li>
				<a className="link action" href="/#contact">
					Контакты
				</a>
			</li>
		</ul>
	);
};

export default MenuList;
