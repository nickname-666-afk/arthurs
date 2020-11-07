import React, {Component} from "react";

import {RoomContext} from "../Rooms";
import ComponentBlock from "./ComponentBlock";
import Filter from "../../../Common/Component/Filter/Filter";

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
		images: ["family", "family", "family"],
	},
	{
		id: 2,
		category: "Люкс",
		price: 5000,
		count: 6,
		squad: 40,
		info: "В номере 2 двуспальные кровати, шкаф, стулья, прикроватные тумбочки,стол, балкон",
		comfort: "Кабельное TV,   Бесплатный WI-FI,    Сплит-система,   Фен, Чайник",
		images: ["lux", "lux", "lux"],
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
		images: ["delux", "delux", "delux"],
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
		images: ["standart", "standart", "standart"],
	},
];

export default class Room extends Component {
	constructor(props) {
		super(props);
		this.state = {
			price: this.props.value,
			count: this.props.value,
			category: this.props.value,
			name: "Button not pressed",
		};
		this.updateData = this.updateData.bind(this);
		console.log(this.state.name);
	}

	updateData = (value) => {
		this.setState({
			name: value,
		});
		console.log(value);
	};

	updateDataPrices = (value) => {
		this.setState({price: value});
	};
	updateDataCounts = (value) => {
		this.setState({count: value});
		console.log(this.state.value);
	};
	updateDataCategories = (value) => {
		this.setState({category: value});
	};

	consumer = (<RoomContext.Consumer>{(room) => this.countUpdate(room)}</RoomContext.Consumer>);

	render() {
		return (
			<div className="content">
				<div className="add-filter">Добавить фильтр</div>
				<Filter
					updateDataPrices={this.updateDataPrices}
					updateDataCounts={this.updateDataCounts}
					updateDataCategories={this.updateDataCategories}
				/>
				{
					rooms === null
						? rooms
						: // .filter(
						  // 		(room) =>
						  // 			room.price >= this.state.price &&
						  // 			room.count >= this.state.count &&
						  // 			room.category === this.state.category,
						  //   )
						  rooms.map((room) => {
								return (
									<ComponentBlock
										updateData={this.updateData}
										updateDataPrices={this.updateDataPrices}
										updateDataCounts={this.updateDataCounts}
										updateDataCategories={this.updateDataCategories}
										key={room.id}
										room={room}
									/>
								);
						  })
					// .filter(
					// 	(room) =>
					// 		room.price >= this.state.price &&
					// 		room.count >= this.state.count &&
					// 		room.category === this.state.category,
					// )
				}
			</div>
		);
	}
}
