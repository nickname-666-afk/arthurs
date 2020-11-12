import React from "react";
import {Link} from "react-router-dom";

import Handeling from "../../assets/Component/Handeling/Handeling";
import "./AdditionalyStyle.scss";

const locationReg = {
	pathname: "/reg",
};
export default class Additionaly extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			price: this.props.value,
		};
	}
	onPrice = (event) => {
		this.setState({price: event.target.value});
		console.log(this.price);
	};
	render() {
		return (
			// <ContentContext.Consumer>
			<div className="Additionaly">
				<div className="title">Дополнительные услуги</div>
				<div className="service">
					<div className="contentShow"></div>
					<Handeling onPrice={this.onPrice} />
					<div className="cart">
						<div className="title">Сумма заказа: {this.event}р</div>
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
