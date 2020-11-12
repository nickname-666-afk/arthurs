import React from "react";

import Icon from "../../../../assets/Files/Icon";

export default class Text extends React.Component {
	render() {
		return (
			<div className="right">
				<div className="title">Наши контакты</div>
				<Icon />
				<div className="text">
					<div className="adr">
						<div className="title">Адрес:</div>
						<div className="p">
							Республика Крым,
							<br /> Береговое, ул. Приморская, 1В
						</div>
					</div>
					<div className="email">
						<div className="title">E-MAIL:</div>
						<div className="p">info@arthurs-beregovoe.ru</div>
					</div>
					<div className="phone">
						<div className="p">Телефон:</div>
						<div className="tel">+7 (958) 756-80-39</div>
					</div>
				</div>
				<a href="https://yandex.com/maps/-/CCUAu0HjCD" target="_black">
					<button className="button">Как проехать</button>
				</a>
			</div>
		);
	}
}
