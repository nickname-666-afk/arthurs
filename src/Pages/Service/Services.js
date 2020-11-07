import React from "react";

import {Link} from "react-router-dom";
import "./ServicesStyle.scss";
// import ContentContext from "../../App";

const locationReg = {
	pathname: "/registration",
};
export default class Services extends React.Component {
	constructor(props) {
		super(props);
		this.state = {price: 1000};
	}
	render() {
		return (
			// <ContentContext.Consumer>
			<div className="Services">
				<div className="title">Дополнительные услуги</div>
				<div className="service">
					<div className="block__rooms"></div>
					{/* <Handeling /> */}
					<div className="cart">
						<div className="title">Сумма заказа:{this.price}</div>
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
