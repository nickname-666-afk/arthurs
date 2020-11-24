import React from "react";
import {Link} from "react-router-dom";
// import ls from "local-storage";
import Select from "react-select";
import {RoomContext} from "../../../pages/rooms/Rooms";
import "./FilterStyle.scss";

const prices = [
	{id: 1, label: "от 3000 рублей", value: 3000},
	{id: 2, label: "от 4000 рублей", value: 4000},
	{id: 3, label: "от 5000 рублей", value: 5000},
];
const counts = [
	{id: 1, label: "от 2 мест", value: 2},
	{id: 2, label: "от 4 мест", value: 4},
	{id: 3, label: "от 6 мест", value: 6},
];
const categories = [
	{id: 1, label: "Люкс", value: "Люкс"},
	{id: 2, label: "Тройной делюкс", value: "Тройной делюкс"},
	{id: 3, label: "Семейный", value: "Семейный"},
	{id: 4, label: "Стандарт", value: "Стандарт"},
];
const rooms = {
	pathname: "/rooms",
};

localStorage.setItem("price", JSON.stringify(prices));
localStorage.setItem("count", JSON.stringify(counts));
localStorage.setItem("category", JSON.stringify(categories));
// localStorage.getItem("price");
console.log(localStorage.getItem("price"));
// let filter = localStorage.getItem("price");
// filter = JSON.parse(filter);
// console.log(typeof filter);

window.addEventListener("storage", function (e) {
	console.log("change");
	// document.querySelector().textContent.localStorage.getItem("");
});
export default class Filter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			price: this.handlePrices,
			count: this.handleCounts,
			category: this.handleCategories,
		};
		// console.log("filter" + ` ${this.state}`);
	}

	isMain = window.location.pathname.includes("/home");
	fStyle = this.isMain ? {boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)"} : {boxShadow: "none"};
	wStyle = this.isMain ? {width: "90%"} : {width: "100%"};
	tStyle = this.isMain ? "Забронировать" : "Показать";
	hStyle = this.isMain ? {display: "none"} : {display: "block"};
	sStyle = this.isMain ? {display: "block"} : {display: "none"};

	// redirectRoute = () => {
	// 	this.setState({redirect: JSON.stringify(this.state.price)});
	// 	console.log(this.redirect);
	// };

	handlePrices = (price) => {
		// this.setState({price: event.value});
		localStorage.setItem("price", JSON.stringify(prices[price]));
		console.log(localStorage.setItem("price", JSON.stringify(prices[price])));
	};
	handleCounts = (event) => {
		this.setState({count: event.value});
		console.log(event.value);
	};
	handleCategories = (event) => {
		this.setState({category: event.value});
		console.log(event.value);
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
		// if (this.state.redirect) {
		// 	return <Redirect to={this.state.redirect} />;
		// }

		// const [state, dispatch] = useReducer(fetchPricesReducer, {
		// 	prices: [
		// 		{id: 1, label: "от 3000 рублей", value: 3000},
		// 		{id: 2, label: "от 4000 рублей", value: 4000},
		// 		{id: 3, label: "от 5000 рублей", value: 5000},
		// 	],
		// 	loading: false,
		// 	error: false,
		// });
		return (
			<div className="Filter box" style={this.fStyle}>
				<div className="wrapper-filter" style={this.wStyle}>
					<div className="custom-select">
						<Select
							onChange={this.handlePrices.bind(this)}
							options={prices}
							placeholder="Стоимость"
						/>
						<Select
							onChange={this.handleCounts.bind(this)}
							options={counts}
							placeholder="Количество мест"
						/>
						<Select
							onChange={this.handleCategories.bind(this)}
							options={categories}
							placeholder="Категория"
						/>
					</div>
					<Link className="link" style={this.sStyle} to={rooms}>
						<button className="button" type="button" style={this.sStyle}>
							Забронировать
						</button>
					</Link>
					<RoomContext.Consumer>
						{() => (
							<button
								className="button"
								style={this.hStyle}
								type="button"
								onClick={this.handleSaveFilterToRead}>
								Показать
							</button>
						)}
					</RoomContext.Consumer>
				</div>
			</div>
		);
	}
}
