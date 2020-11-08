import React from "react";
import {Link} from "react-router-dom";

import Content from "./Content";
import image from "../../../../Common/image/delux.png";
import lux from "../../../../Common/image/lux.png";
import delux from "../../../../Common/image/delux.png";
import family from "../../../../Common/image/family.png";

const images = ["lux", "delux", "family"];
const locationRooms = {
	pathname: "/rooms",
};

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
		};
	}

	clickHandlerFirst() {
		this.setState((prev) => ({showFirst: !prev.showFirst}));
		this.setState(() => ({showSecond: false}));
		this.setState(() => ({showThird: false}));
	}
	clickHandlerSecond() {
		this.setState(()=> ({showFirst: false}))
		this.setState((prev) => ({showSecond: !prev.showSecond}));
		this.setState(()=> ({showThird: false}))
	}
	clickHandlerThird() {
		this.setState(() => ({showFirst: false}));
		this.setState(() => ({showSecond: false}));
		this.setState((prev) => ({showThird: !prev.showThird}));
	}
	componentDidMount() {
		this.setState({
			first: [
				{
					id: 1,
					image: lux,
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
					image: delux,
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
					image: family,
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
					<div className="first" onClick={this.clickHandlerFirst.bind(this)}>
						{first.map((image, index) => (
							<Content key={index} info={image} image={images[0]} />
						))}
					</div>
					<div className="second" onClick={this.clickHandlerSecond.bind(this)}>
						{second.map((image, index) => (
							<Content key={index} info={image} image={images[1]} />
						))}
					</div>
					<div className="third" onClick={this.clickHandlerThird.bind(this)}>
						{third.map((image, index) => (
							<Content key={index} info={image} image={images[2]} />
						))}
					</div>
					<Link className="link" to={locationRooms}>
						<button type="button" className="button">
							Показать все номера
						</button>
					</Link>
				</div>
				<div className="rightImage">
					<div className="img">
						<img src={image} alt="Изображение" />
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
