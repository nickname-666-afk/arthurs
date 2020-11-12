import React from "react";

import found from "./assets/images/found.png";

export default class NotFound extends React.Component {
	isRouter = window.location.pathname.includes("/home");
	isRouterR = window.location.pathname.includes("/rooms");
	isRouterS = window.location.pathname.includes("/service");
	isRouterF = window.location.pathname.includes("/reg");

	rStyle =
		this.isRouter || this.isRouterR || this.isRouterS || this.isRouterF
			? {display: "none"}
			: {display: "flex"};
	render() {
		return (
			<div style={this.rStyle} className="NotFound">
				<div style={{margin: "50px 0"}}>Страница не найдена</div>
				<img style={{maxWidth: "400px"}} src={found} alt="Error" />
			</div>
		);
	}
}
