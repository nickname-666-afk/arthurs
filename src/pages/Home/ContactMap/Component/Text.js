import React from "react";

import Icon from "../../../../assets/Files/Icon";

export default class Text extends React.Component {
	render() {
		return (
			<div className="right">
				<div className="title">Наши контакты</div>
				<Icon />
				<div className="text">
					<div className="address">
						<div className="title">Адрес:</div>
						<div className="address_link">
							<a className="link" href="https://yandex.fr/maps/-/CCUAbGQQdC" target="_black">
								Республика Крым,
								<br /> Береговое, ул. Приморская, 1В
							</a>
						</div>
					</div>
					<div className="email">
						<div className="title">E-MAIL:</div>
						<div className="email_link">
							<a className="link" href="mailto:info@arthurs-beregovoe.ru">
								info@arthurs-beregovoe.ru
							</a>
						</div>
					</div>
					<div className="phone">
						<div className="phone_text">Телефон:</div>
						<div className="phone_link">
							<a className="link" href="tel: +7 (958) 756-80-39">
								+7 (958) 756-80-39
							</a>
						</div>
					</div>
				</div>
				<a className="link" href="https://yandex.com/maps/-/CCUAu0HjCD" target="_black">
					<button className="button">Как проехать</button>
				</a>
			</div>
		);
	}
}
