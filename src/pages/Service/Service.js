import React from "react";
import {Link} from "react-router-dom";

import Handeling from "../../assets/component/handeling/Handeling";
import "../../assets/styles/ServiceStyle.scss";

const reg = {
	pathname: "/reg",
};

// document.querySelector(".ls").onclick = () => {
// 	count++;
// 	localStorage.setItem("filter", count);
// };
export default class Service extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstPrice: 300,
			secondPrice: 350,
			thirdPrice: 200,
			count: 0,
		};
		// this.handlePrice = this.handlePrice.bind(this);
	}
	// handlePrice = () => {
	// 	const count = this.state.count;
	// 	this.setState({count: count + this.state.firstPrice});
	// 	// this.setState({count: count + this.state.secondPrice});
	// 	// this.setState({count: count + this.state.thirdPrice});
	// 	// console.log("click " + this.state.firstPrice);
	// };
	render() {
		return (
			// <ContentContext.Consumer>
			<div className="Service">
				<div className="title">Дополнительные услуги</div>
				<div className="service">
					<div className="contentShow"></div>
					<Handeling handlePrice={this.handlePrice} />
					<div className="cart">
						<div className="title">Сумма заказа: {this.state.count}</div>
						<div className="content"></div>
						<Link className="link" to={reg}>
							<button className="button ls">Заказать</button>
						</Link>
					</div>
				</div>
			</div>
			// </ContentContext.Consumer>
		);
	}
}
