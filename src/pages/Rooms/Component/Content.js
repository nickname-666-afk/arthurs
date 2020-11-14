import React from "react";
import {Link} from "react-router-dom";
import Carousel from "nuka-carousel";

const service = {
	pathname: "/service",
};

export default class Content extends React.Component {
	render() {
		const sliderImage = ["lux", "delux", "family", "standart"];
		const images = sliderImage.map((image) => {
			return (
				<img key={image} src={require(`../../../assets/images/${image}.png`)} alt="Изображение" />
			);
		});
		return (
			<div className="component-block">
				<div className="left">
					<Carousel>{images}</Carousel>
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
					<Link className="link" to={service}>
						<button
							className="button"
							onClick={() => {
								this.props.updatePrices(this.state.name);
							}}>
							Забронировать
						</button>
					</Link>
				</div>
			</div>
		);
	}
}
