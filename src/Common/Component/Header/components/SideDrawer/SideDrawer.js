import React from "react";

import "./SideDrawer.scss";

const sideDrawer = () => {
	return (
		<nav className="side-drawer">
			<ul>
				<div>
					<a className="link" href="/home">
						Главная
					</a>
				</div>
				<div>
					<a className="link" href="/rooms">
						Номера и цены
					</a>
				</div>
				<div>
					<a className="link" href="/rooms">
						Забронировать
					</a>
				</div>
				<div>
					<a className="link" href="/#handeling">
						Услуги
					</a>
				</div>
				<div>
					<a className="link" href="/#contact">
						Контакты
					</a>
				</div>
			</ul>
		</nav>
	);
};

export default sideDrawer;
