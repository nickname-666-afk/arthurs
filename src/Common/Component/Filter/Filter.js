import React from "react";

import "./FilterStyle.scss";
import Select from "react-select";
import {MContext} from "../../../Pages/Rooms/Rooms";

const prices = [
	{id: 1, label: "от 3000 рублей", value: 3000},
	{id: 2, label: "от 4000 рублей", value: 4000},
	{id: 3, label: "от 5000 рублей", value: 5000},
];
const counts = [
	{label: "от 2 мест", value: 2, id: 1},
	{label: "от 4 мест", value: 4, id: 2},
	{label: "от 6 мест", value: 6, id: 3},
];
const categories = [
	{label: "Люкс", value: "Люкс", id: 1},
	{label: "Тройной делюкс", value: "Тройной делюкс", id: 2},
	{label: "Семейный", value: "Семейный", id: 3},
	{label: "Стандарт", value: "Стандарт", id: 4},
];

export default class Filter extends React.Component {
	isMain = window.location.pathname.includes("/home");
	fStyle = this.isMain
		? {boxShadow: "0px 0px 11px rgba(0, 0, 0, 0.35)"}
		: {
				boxShadow: "none",
		  };
	wStyle = this.isMain ? {width: "90%"} : {width: "100%"};
	tStyle = this.isMain ? "Забронировать" : "Показать";
	hStyle = this.isMain ? {display: "none"} : {display: "block"};
	sStyle = this.isMain ? {display: "block"} : {display: "none"};

	constructor(props) {
		super(props);
		this.state = {price: this.value, count: this.value, category: this.value};
	}

	handleChangePrices = (event) => {
		this.setState({price: event.value});
	};
	handleChangeCounts = (event) => {
		this.setState({count: event.value});
	};
	handleChangeCategories = (event) => {
		this.setState({category: event.value});
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
					<div className="custom-select">
						<Select
							onChange={this.handleChangePrices}
							// value={this.state.prices}
							options={prices}
							placeholder="Стоимость"
						/>
						<Select
							onChange={this.handleChangeCounts}
							// value={this.state.counts}
							options={counts}
							placeholder="Количество мест"
						/>
						<Select
							onChange={this.handleChangeCategories}
							// value={this.state.categories}
							options={categories}
							placeholder="Категория"
						/>
					</div>
					<a href="/rooms" className="link" style={this.sStyle}>
						<button className="button" type="button" style={this.sStyle}>
							Забронировать
						</button>
					</a>
					<MContext.Consumer>
						{(context) => (
							<button
								className="button"
								style={this.hStyle}
								type="button"
								onClick={() => {
									this.props.updateDataPrices(this.state.price);
									this.props.updateDataCounts(this.state.count);
									this.props.updateDataCategories(this.state.category);
								}}>
								Показать
							</button>
						)}
					</MContext.Consumer>
				</div>
			</div>
		);
	}
}
