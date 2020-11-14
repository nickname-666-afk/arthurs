import React from "react";
import {Link} from "react-router-dom";

import Handeling from "../../assets/Component/Handeling/Handeling";
import "./ServiceStyle.scss";

const reg = {
	pathname: "/reg",
};
export default class Service extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstPrice: this.props.value,
		};
		this.handlePrice = this.handlePrice.bind(this);
	}
	handlePrice() {
		this.setState({firstPrice: this.props.value});
		console.log(this.state.price);
	}
	render() {
		// const price = this.state.firstPrice;
		return (
			// <ContentContext.Consumer>
			<div className="Service">
				<div className="title">Дополнительные услуги</div>
				<div className="service">
					<div className="contentShow"></div>
					<Handeling handlePrice={this.handlePrice} />
					<div className="cart">
						<div className="title">Сумма заказа: {this.state.price}р</div>
						<div className="content"></div>
						<Link className="link" to={reg}>
							<button className="button">Заказать</button>
						</Link>
					</div>
				</div>
			</div>

			// </ContentContext.Consumer>
		);
	}
}
