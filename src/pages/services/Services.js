import React from "react";
import {Link} from "react-router-dom";
import ElemServ from "../../elem/elemServ/ElemService";

export default class Services extends React.Component {
	constructor(props) {
		super();
		this.state = {
			// firstPrice: 300,
			// secondPrice: 350,
			// thirdPrice: 200,
			cart: 0,
		};
	}
	handlePrice = () => {
		let item = this.state.cart;
		item++;
		this.setState({count: item});
		console.log(item);
		// this.setState({count: count + this.state.secondPrice});
		// this.setState({count: count + this.state.thirdPrice});
		// console.log("click " + this.state.firstPrice);
	};
	render() {
		return (
			<div className="Services">
				<div className="title">Дополнительные услуги</div>
				<div className="service">
					<div className="contentShow"></div>
					<div className="wrapper-serv__cart">
						{this.props.services.map((service) => {
							return <ElemServ key={service} service={service} handlePrice={this.handlePrice} />;
						})}
						<div className="cart">
							<div className="title">
								<div className="p">Сумма заказа:</div>
								<div className="p">{this.state.count}</div>
							</div>
							<div className="content"></div>
							<Link className="link" to="/reg">
								<button className="button ls">Заказать</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
