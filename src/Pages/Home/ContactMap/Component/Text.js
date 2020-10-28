import React from "react";

import Address from "../../../../Common/Files/Address";
import Tel from "../../../../Common/Files/Tel";
import Icon from "../../../../Common/Files/Icon";

const Text = () => {
	return (
		<div className="right">
			<div className="title">Наши контакты</div>
			<Icon />
			<div className="text">
				<div className="adr">
					<div className="title">Адрес:</div>
					<Address />
				</div>
				<div className="email">
					<div className="title">E-MAIL:</div>
					<div className="p">info@arthurs-beregovoe.ru</div>
				</div>
				<div className="phone">
					<p className="p">Телефон:</p>
					<Tel />
				</div>
			</div>
			<a href="https://maps.yandex.ru/" target="_black">
				<button className="button">Как проехать</button>
			</a>
		</div>
	);
};

export default Text;
