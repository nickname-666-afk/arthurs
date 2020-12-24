import React from "react";
import {Link} from "react-router-dom";
import Start from "./Start";
import Filter from "../../elem/filter/Filter";
import Welcome from "./Welcome";
import Icons from "./Icons";
import Numbers from "./numbers/Numbers";
import Service from "../../elem/service/Service";
import Canteen from "./Canteen";
import Barbecue from "./Barbecue";
import Maps from "./Maps";

const button = [
	<div className="group-button" key={4}>
		<Link className="link" to="/rooms">
			<button type="button" className="button">
				Забронировать
			</button>
		</Link>
	</div>,
];
const text = [
	<div className="text" key={5}>
		<h1 className="h">
			Лучший отдых <br />
			начинаеться здесь!
		</h1>
		<div className="p">
			Современный и уютный отель,
			<br />
			расположенный на берегу моря,
			<br />
			идеально подойдет для отдыха в Крыму
		</div>
	</div>,
];

export default class Home extends React.Component {
	render() {
		return (
			<div className="App">
				<Start phone={this.props.phone} button={button} icons={this.props.icons} text={text} />
				<Filter />
				<div className="component">
					<Welcome button={button} />
				</div>
				<Icons />
				<div className="component">
					<Numbers />
				</div>
				<div className="component">
					<Service services={this.props.services} />
				</div>
				<div className="component">
					<Canteen />
				</div>
				<div className="component">
					<Barbecue />
				</div>
				<Maps icons={this.props.icons} />
			</div>
		);
	}
}
