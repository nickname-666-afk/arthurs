import React from "react";
// import { RoomContext } from "../Rooms";
import Content from "./Content";
import Filter from "../../../elem/filter/Filter";
import family from "../../../assets/images/family.png";
import luxFirst from "../../../assets/images/lux/first.jpg";
import luxSecond from "../../../assets/images/lux/second.jpg";
import luxThird from "../../../assets/images/lux/third.jpg";
import delux from "../../../assets/images/delux.png";
import standart from "../../../assets/images/standart.png";
const rooms = [
	{
		category: "Люкс с двумя спальнями и видом на море",
		price: 5000,
		count: 6,
		squad: 40,
		info: "В номере 2 двуспальные кровати, шкаф, стулья, прикроватные тумбочки,стол, балкон",
		comfort: "Кабельное TV,   Бесплатный WI-FI,    Сплит-система,   Фен, Чайник",
		image: [luxFirst, luxSecond, luxThird],
	},
	{
		category: "Двухместный делюкс с видом на море",
		price: 3500,
		count: 3,
		squad: 25,
		info:
			"В номере 1 двуспальная и 1 односпальная кровати, шкаф, стулья, прикроватные тумбочки,стол",
		comfort: "Кабельное TV,   Бесплатный WI-FI,    Сплит-система,   Фен, Чайник",
		image: [delux, delux, delux],
	},
	{
		category: "Двухместный делюкс",
		price: 3500,
		count: 3,
		squad: 25,
		info:
			"В номере 1 двуспальная и 1 односпальная кровати, шкаф, стулья, прикроватные тумбочки,стол",
		comfort: "Кабельное TV,   Бесплатный WI-FI,    Сплит-система,   Фен, Чайник",
		image: [delux, delux, delux],
	},
	{
		category: "Трехместный делюкс с видом на море",
		price: 3500,
		count: 3,
		squad: 25,
		info:
			"В номере 1 двуспальная и 1 односпальная кровати, шкаф, стулья, прикроватные тумбочки,стол",
		comfort: "Кабельное TV,   Бесплатный WI-FI,    Сплит-система,   Фен, Чайник",
		image: [delux, delux, delux],
	},
	{
		category: "Трехместный делюкс",
		price: 3500,
		count: 3,
		squad: 25,
		info:
			"В номере 1 двуспальная и 1 односпальная кровати, шкаф, стулья, прикроватные тумбочки,стол",
		comfort: "Кабельное TV,   Бесплатный WI-FI,    Сплит-система,   Фен, Чайник",
		image: [delux, delux, delux],
	},
	{
		category: "Четырёхместный",
		price: 4000,
		count: 4,
		squad: 25,
		info:
			"В номере 1 двуспальная и 1 односпальная кровати, шкаф, стулья, прикроватные тумбочки,стол",
		comfort: "Кабельное TV,   Бесплатный WI-FI,    Сплит-система,   Фен, Чайник",
		image: [standart, standart, standart],
	},
	{
		category: "Семейный",
		price: 4000,
		count: 5,
		squad: 25,
		info:
			"В номере 1 двуспальная и 1 односпальная кровати, шкаф, стулья, прикроватные тумбочки,стол",
		comfort: "Кабельное TV,   Бесплатный WI-FI,    Сплит-система,   Фен, Чайник",
		image: [family, family, family],
	},
];

export default class Room extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			price: this.props.handlePrices,
			count: this.props.handleCounts,
			category: this.props.handleCategories,
		};
	}
	updatePrices = (event) => {
		this.setState({ price: event.target.value });
	};
	updateCounts = (event) => {
		this.setState({ count: event.target.value });
	};
	updateCategories = (event) => {
		this.setState({ category: event.target.value });
	};
	// consumer = (<RoomContext.Consumer>{(room) => this.Content(room)}</RoomContext.Consumer>);

	render() {
		return (
			<div className="content">
				<div className="add-filter">Добавить фильтр</div>
				<Filter
					updatePrice={this.updatePrice}
					updateCounts={this.updateCounts}
					updateCategories={this.updateCategories}
				/>
				{rooms.map((room, i) => {
					if (room.count !== this.updateCounts) {
						return (
							<Content
								updatePrices={this.updatePrices}
								updateCounts={this.updateCounts}
								updateCategories={this.updateCategories}
								key={`${i}`}
								room={room}
							/>
						);
					} else return null;
				})}
			</div>
		);
	}
}
