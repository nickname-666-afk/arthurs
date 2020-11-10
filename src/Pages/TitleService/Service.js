import React from "react";

import {Link} from "react-router-dom";
import "./ServicesStyle.scss";

const locationReg = {
	pathname: "/registration",
};
export default class Service extends React.Component {
	render() {
		return (
			// <ContentContext.Consumer>
			<div className="Services">
				<div className="title">Дополнительные услуги</div>
				<div className="service">
					<div className="block__rooms"></div>
					{/* <Handeling /> */}
					<div className="cart">
						<div className="title">Сумма заказа:</div>
						<div className="content"></div>
						<Link className="link" to={locationReg}>
							<button className="button">Заказать</button>
						</Link>
					</div>
				</div>
			</div>

			// </ContentContext.Consumer>
		);
	}
}
