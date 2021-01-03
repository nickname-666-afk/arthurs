import React from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

const prices = [
	{ id: 0, label: "Все", value: "All" },
	{ id: 1, label: "от 3000 рублей", value: 3000 },
	{ id: 2, label: "от 4000 рублей", value: 4000 },
	{ id: 3, label: "от 5000 рублей", value: 5000 },
];
const counts = [
	{ id: 0, label: "Все", value: "All" },
	{ id: 1, label: "от 2 мест", value: 2 },
	{ id: 2, label: "от 4 мест", value: 4 },
	{ id: 3, label: "от 6 мест", value: 6 },
];
const categories = [
	{ id: 0, label: "Все", value: "All" },
	{ id: 1, label: "Делюкс", value: "Делюкс" },
	{ id: 2, label: "Трехместный", value: "Трехместный" },
	{ id: 3, label: "Семейный", value: "Семейный" },
	{ id: 4, label: "С видом на море", value: "Море" },
];

export default class Filter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			price: this.handlePrices,
			count: this.handleCounts,
			category: this.handleCategories,
		};
	}

	isRoute = window.location.pathname.includes("/home");
	fStyle = this.isRoute ? { boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)" } : { boxShadow: "none" };
	wStyle = this.isRoute ? { width: "90%" } : { width: "100%" };
	tStyle = this.isRoute ? "Забронировать" : "Показать";
	hStyle = this.isRoute ? { display: "none" } : { display: "block" };
	sStyle = this.isRoute ? { display: "block" } : { display: "none" };

	handlePrices = (event) => {
		this.setState({ price: event.value });
		// console.log(event.price);
	};
	handleCounts = (event) => {
		this.setState({ count: event.value });
		// console.log(event.value);
	};
	handleCategories = (event) => {
		this.setState({ category: event.value });
		// console.log(event.value);
	};
	isMobileDevice() {
		return (
			typeof window.orientation !== "undefined" || navigator.userAgent.indexOf("IEMobile") !== -1
		);
	}
	componentDidMount() {
		window.addEventListener("onload", () => {
			this.crear_select();
		});
	}

	render() {
		return (
			<div className="Filter box" style={this.fStyle}>
				<div className="wrapper-filter" style={this.wStyle}>
					<div className="filter__custom-select">
						<Select onChange={this.handlePrices} options={prices} placeholder="Стоимость" />
						<Select onChange={this.handleCounts} options={counts} placeholder="Количество мест" />
						<Select onChange={this.handleCategories} options={categories} placeholder="Категория" />
					</div>
					<Link className="link" style={this.sStyle} to="/rooms">
						<button className="button" type="button" style={this.sStyle}>
							Забронировать
						</button>
					</Link>
					<button className="button" style={this.hStyle} type="button" onClick={this.updateCounts}>
						Показать
					</button>
				</div>
			</div>
		);
	}
}
