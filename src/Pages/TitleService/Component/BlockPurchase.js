import React from "react";
import {NavLink} from "react-router-dom";

export default class BlockPurchase extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {purchase: this.props.value};
	// }
	// sendPurchase = () => {
	// 	this.props.updatePurchase;
	// };
	render() {
		return (
			<div className="block__orders">
				<div className="title">Сумма заказа:{this.props.purchases}</div>
				<div className="content"></div>
				<NavLink className="link" to="/registration ">
					<button className="button">Заказать</button>
				</NavLink>
			</div>
		);
	}
}
