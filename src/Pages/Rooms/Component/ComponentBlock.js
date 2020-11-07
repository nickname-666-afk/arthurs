import React, {Component} from "react";
import {Link} from "react-router-dom";

import Carousel from "nuka-carousel";

const locationService = {
	pathname: "/service",
};

export default class ComponentBlock extends Component {
	constructor(props) {
		super(props);
		this.state = {name: "Button press"};
	}

	// updateDate = (event) => {
	// 	this.setState({
	// 		date: event.target.value,
	// 	});
	// 	console.log(event.value);
	// };
	render() {
		return (
			<div className="component-block">
				<div className="left">
					<Carousel>
						{this.props.room.images.map((image) => {
							return (
								<img
									key={image}
									src={require(`../../../Common/image/${image}.png`)}
									className="image"
									alt="Изображение"
								/>
							);
						})}
					</Carousel>
				</div>
				<div className="right">
					<div className="text">
						<div className="title">{this.props.room.category}</div>
						<div className="price">{this.props.room.price} руб в сутки</div>
						<div className="count">Максимум: {this.props.room.count}</div>
						<div className="square">
							Площадь: {this.props.room.squad}м<sup>2</sup>
						</div>
						<div className="info">
							<div>{this.props.room.info}</div>
						</div>
						<div className="comfort">
							<p className="p">Удобства:</p>
							<div>{this.props.room.comfort}</div>
						</div>
					</div>
					<Link className="link" to={locationService}>
						<button className="button" onClick={() => this.props.updateDate(this.state.name)}>
							Забронировать
						</button>
					</Link>
				</div>
			</div>
		);
	}
}
