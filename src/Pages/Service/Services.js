import React from "react";

import Handeling from "../../Common/Component/Handeling/Handeling";
import BlockRooms from "./Component/BlockRooms";
import BlockPurchase from "./Component/BlockPurchase";
import "./ServicesStyle.scss";
import {Context} from "../Rooms/Component/ComponentBlock";

export default class Services extends React.Component {
	constructor(props) {
		super(props);
		this.state = {purchase: 1};
	}

	updatePurchase = (value) => {
		this.setState({purchase: value});
	};

	consumer = (<Context.Consumer>{(context) => this.countUpdate(context)}</Context.Consumer>);

	render() {
		return (
			<div className="Services">
				<div className="title">Дополнительные услуги</div>
				<div className="service">
					{/* {this.props.room} */}
					<BlockRooms />
					<Handeling />
					<BlockPurchase updatePurchase={this.updatePurchase} />
				</div>
			</div>
		);
	}
}
