import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";

const Content = ({ room }) => {
	return (
		<div className="component-flex">
			<div className="flex">
				<Carousel>
					<Carousel.Item interval={1000}>
						<img src={room.image[0]} alt="Изображение" />
					</Carousel.Item>
					<Carousel.Item interval={1000}>
						<img src={room.image[1]} alt="Изображение" />
					</Carousel.Item>
					<Carousel.Item interval={1000}>
						<img src={room.image[2]} alt="Изображение" />
					</Carousel.Item>
				</Carousel>
			</div>
			<div className="flex">
				<div className="text">
					<div className="text__title_wrrapper">
						<p className="title">{room.category}</p>
						<p className="title">{room.price} руб в сутки</p>
					</div>
					<p className="count">Максимум: {room.count}</p>
					<p className="square">
						Площадь: {room.squad}м<sup>2</sup>
					</p>
					<p className="info">{room.info}</p>
					<div className="comfort">
						Удобства: <p>{room.comfort}</p>
					</div>
				</div>
				<div className="group-button">
					<Link className="link" to="/rooms">
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
};
export default Content;
