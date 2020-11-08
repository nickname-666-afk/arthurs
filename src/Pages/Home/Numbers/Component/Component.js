import React from "react";
import {Link} from "react-router-dom";

import Content from "./Content";
import image from "../../../../Common/image/delux.png";
import lux from "../../../../Common/image/lux.png";
import delux from "../../../../Common/image/delux.png";
import family from "../../../../Common/image/family.png";
import $ from "jquery";

$(document).ready(function () {
	$(".first .column").click(function (event) {
		event.preventDefault();
		$(".second-text").remove();
		$(".third-text").remove();
		$(".img").append(
			"<div class='first-text'><div class='title'>Люкс</div><div class='price'>от 5000р в сутки</div><div class='count'>Максимум 3 человека</div><div class='squad'>Площадь номера: 30м<sup>2</sup></div><div class='info'>В номере: 2 двуспальнии и 1 односпальная кровати, шкаф, стулья, прикроватные тумбочки,стол</div></div>",
		);
		return false;
	});
	$(".second .column").click(function (event) {
		event.preventDefault();
		$(".first-text").remove();
		$(".third-text").remove();
		$(".img").append(
			"<div class='second-text'><div class='title'>Тройной делюкс</div><div class='price'>от 3500р в сутки</div><div class='count'>Максимум 4 человека</div><div class='squad'>Площадь номера: 35м<sup>2</sup></div><div class='info'>В номере: 1 двуспальная и 1 односпальная кровати, шкаф, стулья, прикроватные тумбочки,стол</div></div>",
		);
		return false;
	});
	$(".third .column").click(function (event) {
		event.preventDefault();
		$(".first-text").remove();
		$(".second-text").remove();
		$(".img").append(
			"<div class='third-text'><div class='title'>Семейный</div><div class='price'>от 4000р в сутки</div><div class='count'>Максимум 5 человек</div><div class='squad'>Площадь номера: 40м<sup>2</sup></div><div class='info'>В номере: 2 двуспальнии и 2 односпальных кровати, шкаф, стулья, прикроватные тумбочки,стол</div></div>",
		);
		return false;
	});
});

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
		};
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
					<div className="first">
						{first.map((image, index) => (
							<Content key={index} info={image} image={images[0]} />
						))}
					</div>
					<div className="second">
						{second.map((image, index) => (
							<Content key={index} info={image} image={images[1]} />
						))}
					</div>
					<div className="third">
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
					</div>
				</div>
			</div>
		);
	}
}