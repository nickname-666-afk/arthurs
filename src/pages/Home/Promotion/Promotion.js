import React from "react";
import {Link} from "react-router-dom";

import "./PromotionStyle.scss";

const locationRooms = {
	pathname: "/rooms",
};

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
					<Link className="link" to={locationRooms}>
						<button type="button" className="button">
							Забронировать прямо сейчас
						</button>
					</Link>
				</div>
			</div>
		);
	}
}
