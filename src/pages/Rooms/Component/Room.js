import React from "react";

import {RoomContext} from "../Rooms";
import Content from "./Content";
import Filter from "../../../assets/component/filter/Filter";

import family from "../../../assets/images/family.png";
import lux from "../../../assets/images/lux.png";
import delux from "../../../assets/images/delux.png";
import standart from "../../../assets/images/standart.png";

const rooms = [
	{
		id: 1,
		category: "Семейный",
		price: 4000,
		count: 5,
		squad: 25,
		info:
			"В номере 1 двуспальная и 1 односпальная кровати, шкаф, стулья, прикроватные тумбочки,стол",
		comfort: "Кабельное TV,   Бесплатный WI-FI,    Сплит-система,   Фен, Чайник",
		image: [family, family, family],
	},
	{
		id: 2,
		category: "Люкс",
		price: 5000,
		count: 6,
		squad: 40,
		info: "В номере 2 двуспальные кровати, шкаф, стулья, прикроватные тумбочки,стол, балкон",
		comfort: "Кабельное TV,   Бесплатный WI-FI,    Сплит-система,   Фен, Чайник",
		image: [lux, lux, lux],
	},
	{
		id: 3,
		category: "Тройной делюкс",
		price: 3500,
		count: 3,
		squad: 25,
		info:
			"В номере 1 двуспальная и 1 односпальная кровати, шкаф, стулья, прикроватные тумбочки,стол",
		comfort: "Кабельное TV,   Бесплатный WI-FI,    Сплит-система,   Фен, Чайник",
		image: [delux, delux, delux],
	},
	{
		id: 4,
		category: "Стандарт",
		price: 4000,
		count: 4,
		squad: 25,
		info:
			"В номере 1 двуспальная и 1 односпальная кровати, шкаф, стулья, прикроватные тумбочки,стол",
		comfort: "Кабельное TV,   Бесплатный WI-FI,    Сплит-система,   Фен, Чайник",
		image: [standart, standart, standart],
	},
];

export default class Room extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			price: this.props.value,
			count: this.props.handleCount,
			category: this.props.handleCategory,
		};
		// setTimeout(() => {
		// 	return console.log(this.state.price);
		// }, 4000);
	}
	updatePrices = (event) => {
		this.setState({price: event.target.value});
		console.log(this.updatePrices);
	};
	updateCounts = (event) => {
		this.setState({count: event.target.value});
	};
	updateCategories = (event) => {
		this.setState({category: event.target.value});
	};
	filterOnSearch = () => {
		console.log(this.props.price);
	};

	consumer = (<RoomContext.Consumer>{(room) => this.Content(room)}</RoomContext.Consumer>);

	render() {
		return (
			<div className="content">
				<div className="add-filter">Добавить фильтр</div>
				<Filter
					updatePrices={this.updatePrices}
					updateCounts={this.updateCounts}
					updateCategories={this.updateCategories}
					filterOnSearch={this.filterOnSearch}
				/>
				{/* {rooms.map((slider) => { */}
				{/* <img src={require(`../../../assets/images/${slider}.png`)} /> */}
				{/* <div style={{backgroundImage: `url(${slider})`, height: "200px"}} alt="Изображение" /> */}
				{/* })} */}
				{rooms.map((room) => {
					return (
						<Content
							updatePrices={this.updatePrices}
							updateCounts={this.updateCounts}
							updateCategories={this.updateCategories}
							key={room.id}
							room={room}
						/>
					);
				})}
			</div>
		);
	}
}
