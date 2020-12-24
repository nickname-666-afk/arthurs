import React from "react";
import {Link} from "react-router-dom";
import {Carousel} from "react-bootstrap";

export default class Content extends React.Component {
	render() {
		return (
			<div className="component-flex">
				<div className="flex">
					<Carousel>
						<Carousel.Item interval={1000}>
							<img src={this.props.room.image[0]} alt="Изображение" />
						</Carousel.Item>
						<Carousel.Item interval={1000}>
							<img src={this.props.room.image[1]} alt="Изображение" />
						</Carousel.Item>
						<Carousel.Item interval={1000}>
							<img src={this.props.room.image[2]} alt="Изображение" />
						</Carousel.Item>
					</Carousel>
				</div>
				<div className="flex">
					<div className="text">
						<div className="text__title_wrrapper">
							<p className="title">{this.props.room.category}</p>
							<p className="title">{this.props.room.price} руб в сутки</p>
						</div>
						<p className="count">Максимум: {this.props.room.count}</p>
						<p className="square">
							Площадь: {this.props.room.squad}м<sup>2</sup>
						</p>
						<p className="info">{this.props.room.info}</p>
						<div className="comfort">
							Удобства: <p>{this.props.room.comfort}</p>
						</div>
					</div>
					<div className="group-button">
						<Link className="link" to="/services">
							<button
								className="button"
								onClick={() => {
									// this.props.updatePrices(this.state.name);
								}}>
								Забронировать
							</button>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}
