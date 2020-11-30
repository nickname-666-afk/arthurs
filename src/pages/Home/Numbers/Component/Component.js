import React from "react";
import {Link} from "react-router-dom";

import Content from "./Content";
import lux from "../../../../assets/images/lux.png";
import delux from "../../../../assets/images/delux.png";
import family from "../../../../assets/images/family.png";

const routeRooms = {
	pathname: "/rooms",
};
const images = [lux, delux, family];

export default class Column extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			first: [],
			second: [],
			third: [],
			showFirst: true,
			showSecond: false,
			showThird: false,
			imageFirst: true,
			imageSecond: false,
			imageThird: false,
		};
	}

	clickHandlerFirst() {
		this.setState(() => ({imageFirst: true}));
		this.setState(() => ({imageSecond: false}));
		this.setState(() => ({imageThird: false}));
		this.setState(() => ({showFirst: true}));
		this.setState(() => ({showSecond: false}));
		this.setState(() => ({showThird: false}));
	}
	clickHandlerSecond() {
		this.setState(() => ({imageFirst: false}));
		this.setState(() => ({imageSecond: true}));
		this.setState(() => ({imageThird: false}));
		this.setState(() => ({showFirst: false}));
		this.setState(() => ({showSecond: true}));
		this.setState(() => ({showThird: false}));
	}
	clickHandlerThird() {
		this.setState(() => ({imageFirst: false}));
		this.setState(() => ({imageSecond: false}));
		this.setState(() => ({imageThird: true}));
		this.setState(() => ({showFirst: false}));
		this.setState(() => ({showSecond: false}));
		this.setState(() => ({showThird: true}));
	}
	componentDidMount() {
		this.setState({
			first: [
				{
					id: 1,
					title: "Люкс",
					count: "Максимум: 3 человека",
					text: "от 5000р в сутки",
					square: "Площадь номера: 30м",
				},
			],
		});
		this.setState({
			second: [
				{
					id: 2,
					title: "Тройной делюкс",
					count: "Максимум: 4 человека",
					text: "от 3500 в сутки",
					square: "Площадь номера: 35м",
				},
			],
		});
		this.setState({
			third: [
				{
					id: 3,
					title: "Семейный",
					count: "Максимум: 5 человек",
					text: "от 4000р в сутки",
					square: "Площадь номера: 40м",
				},
			],
		});
	}

	render() {
		const {first, second, third} = this.state;
		return (
			<div className="container-num">
				<div className="title">Наши номера и цены</div>
				<div className="leftListItems">
					<div className="first" onMouseOver={this.clickHandlerFirst.bind(this)}>
						{first.map((image) => (
							<Content key={image} text={image} images={images[0]} />
						))}
					</div>
					<div className="second" onMouseOver={this.clickHandlerSecond.bind(this)}>
						{second.map((image) => (
							<Content key={image} text={image} images={images[1]} />
						))}
					</div>
					<div className="third" onMouseOver={this.clickHandlerThird.bind(this)}>
						{third.map((image) => (
							<Content key={image} text={image} images={images[2]} />
						))}
					</div>
					<Link className="link" to={routeRooms}>
						<button type="button" className="button">
							Показать все номера
						</button>
					</Link>
				</div>
				<div className="rightImage">
					<div className="image" onClick={this.routeRooms}>
						{this.state.imageFirst ? <img src={lux} alt="Изображение" /> : null}
						{this.state.showFirst ? (
							<div className="first-text">
								<div className="title">Люкс</div>
								<div className="price">от 5000р в сутки</div>
								<div className="count">Максимум 3 человека</div>
								<div className="squad">
									Площадь номера: 30м<sup>2</sup>
								</div>
								<div className="info">
									В номере: 2 двуспальнии и 1 односпальная кровати, шкаф, стулья, прикроватные
									тумбочки,стол
								</div>
							</div>
						) : null}
						{this.state.imageSecond ? <img src={delux} alt="Изображение" /> : null}
						{this.state.showSecond ? (
							<div className="second-text">
								<div className="title">Тройной делюкс</div>
								<div className="price">от 3500р в сутки</div>
								<div className="count">Максимум 4 человека</div>
								<div className="squad">
									Площадь номера: 35м<sup>2</sup>
								</div>
								<div className="info">
									В номере: 1 двуспальная и 1 односпальная кровати, шкаф, стулья, прикроватные
									тумбочки,стол
								</div>
							</div>
						) : null}
						{this.state.imageThird ? <img src={family} alt="Изображение" /> : null}
						{this.state.showThird ? (
							<div className="third-text">
								<div className="title">Семейный</div>
								<div className="price">от 4000р в сутки</div>
								<div className="count">Максимум 5 человек</div>
								<div className="squad">
									Площадь номера: 40м<sup>2</sup>
								</div>
								<div className="info">
									В номере: 2 двуспальнии и 2 односпальных кровати, шкаф, стулья, прикроватные
									тумбочки,стол
								</div>
							</div>
						) : null}
					</div>
				</div>
			</div>
		);
	}
}
