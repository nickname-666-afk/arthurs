import React from "react";
import {Link} from "react-router-dom";

import Start from "./Start";
import Filter from "../../assets/component/filter/Filter";
import Welcome from "./welcome/Welcome";
import Icons from "./Icons";
import Numbers from "./numbers/Numbers";
import Promotion from "./Promotion";
import Handeling from "../../assets/component/handeling/Handeling";
import MenuFirst from "./MenuFirst";
import MenuSecond from "./MenuSecond";
import Maps from "./Maps";

import "../../assets/styles/HandelingStyle.scss";
import "../../assets/styles/IconsStyle.scss";
import "../../assets/styles/MapsStyle.scss";
import "../../assets/styles/MenuFirstStyle.scss";
import "../../assets/styles/MenuSecondStyle.scss";
import "../../assets/styles/NumberStyle.scss";
import "../../assets/styles/PromotionStyle.scss";
import "../../assets/styles/StartStyle.scss";
import "../../assets/styles/WelcomeStyle.scss";

const routeRooms = {
	pathname: "/rooms",
};
const button = [
	<Link className="link" to={routeRooms} key={4}>
		<button type="button" className="button">
			Забронировать
		</button>
	</Link>,
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
const promotion = [
	<div className="content text" key={6}>
		<div className="title">
			Акция! <br />
			Ночь в подарок
		</div>
		<div className="p">Забронируйте номер на 5 ночей и получите шестую ночь в подарок</div>
		<Link className="link" to={routeRooms}>
			<button type="button" className="button">
				Забронировать прямо сейчас
			</button>
		</Link>
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
				<div className="m">
					<Icons />
				</div>
				<div className="component">
					<Numbers />
				</div>
				<div className="m">
					<Promotion promotion={promotion} />
				</div>
				<div className="component">
					<Handeling />
				</div>
				<div className="component">
					<MenuFirst />
				</div>
				<div className="component">
					<MenuSecond />
				</div>
				<Maps icons={this.props.icons} address={this.props.address} />
			</div>
		);
	}
}
