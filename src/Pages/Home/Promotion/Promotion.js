import React from "react";

import "./PromotionStyle.scss";

export default class Promotion extends React.Component {
	render() {
		return (
			<div className="Promotion box">
				<div className="content text">
					<div className="title">
						Акция! <br />
						Ночь в подарок
					</div>
					<div className="p">Забронируйте номер на 5 ночей и получите шестую ночь в подарок</div>
					<a className="link" href="/rooms">
						<button type="button" className="button">
							Забронировать прямо сейчас
						</button>
					</a>
				</div>
			</div>
		);
	}
}
