import React from "react";
import {Link} from "react-router-dom";

import ElemServ from "../../elem/elemServ/ElemService";

const routeReg = {
	pathname: "/reg",
};

// document.querySelector(".ls").onclick = () => {
// 	count++;
// 	localStorage.setItem("filter", count);
// };
export default class Services extends React.Component {
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
			<div className="Services">
				<div className="title">Дополнительные услуги</div>
				<div className="service">
					<div className="contentShow"></div>
					<div className="wrapper-serv__cart">
						{this.props.services.map((service) => {
							return <ElemServ key={service} service={service} />;
						})}
						<div className="cart">
							<div className="title">
								<div className="p">Сумма заказа:</div>
								<div className="p">{this.state.count}</div>
							</div>
							<div className="content"></div>
							<Link className="link" to={routeReg}>
								<button className="button ls">Заказать</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
			// </ContentContext.Consumer>
		);
	}
}
