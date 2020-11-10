import React from "react";

import {RoomContext} from "../Rooms";
import Content from "./Content";
import Filter from "../../../Common/Component/Filter/Filter";

import lux from "../../../Common/image/lux.png";
import delux from "../../../Common/image/delux.png";
import family from "../../../Common/image/family.png";
import standart from "../../../Common/image/standart.png";

const images = [lux, delux, family,standart];
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
		images: [family, family, family],
	},
	{
		id: 2,
		category: "Люкс",
		price: 5000,
		count: 6,
		squad: 40,
		info: "В номере 2 двуспальные кровати, шкаф, стулья, прикроватные тумбочки,стол, балкон",
		comfort: "Кабельное TV,   Бесплатный WI-FI,    Сплит-система,   Фен, Чайник",
		images: [lux, lux, lux],
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
		images: [delux, delux, delux],
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
		images: [standart, standart, standart],
	},
];

export default class Room extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			price: this.props.value,
			count: this.props.value,
			category: this.props.value,
		};
	}

	updatePrices = (event) => {
		this.setState({price: event.target.value});
	};
	updateCounts = (event) => {
		this.setState({count: event.target.value});
	};
	updateCategories = (event) => {
		this.setState({category: event.target.value});
	};

	consumer = (<RoomContext.Consumer>{(room) => this.countUpdate(room)}</RoomContext.Consumer>);

	render() {
		return (
			<div className="content">
				<div className="add-filter">Добавить фильтр</div>
				<Filter
					updatePrices={this.updatePrices}
					updateCounts={this.updateCounts}
					updateCategories={this.updateCategories}
				/>
				{rooms
					? rooms.map((room) => {
							return (
								<Content
									updatePrices={this.updatePrices}
									updateCounts={this.updateCounts}
									updateCategories={this.updateCategories}
									images={images[0]}
									key={room.id}
									room={room}
								/>
							);
					  })
					: rooms
							.filter
							// (room) => room.price >= this.state.price,
							// &&
							// room.count >= this.state.count &&
							// room.category === this.state.category,
							()}
			</div>
		);
	}
}
