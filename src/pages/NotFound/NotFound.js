import React from "react";
import {Link} from "react-router-dom";

import "../../assets/styles/NotFoundStyle.scss";

const home = {
	pathname: "/home",
};

export default class NotFound extends React.Component {
	isHome = window.location.pathname.includes("/home");

	hStyle = this.isHome ? {display: "none"} : {display: "flex"};

	render() {
		return (
			<div style={this.hStyle} className="NotFound">
				Запрашиваемая страница не найдена
				<div id="printer-404">
					<div className="back"></div>
					<div className="body"></div>
					<div className="front"></div>
					<div className="paper1">
						<div>404</div>
					</div>
					<div className="paper2">
						<div>404</div>
					</div>
					<div className="mask"></div>
				</div>
				<Link className="link" to={home}>
					Вернуться домой
				</Link>
			</div>
		);
	}
}
