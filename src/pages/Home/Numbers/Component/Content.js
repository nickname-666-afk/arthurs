import React from "react";
import {Link} from "react-router-dom";

const locationRooms = {
	pathname: "/rooms",
};

export default class Content extends React.Component {
	render() {
		const text = this.props.text;
		return (
			<div className="list">
				<div className="column">
					<div className="image">
						<img src={this.props.images} alt="Изображение" />
					</div>
					<div className="text">
						<div className="title">{text.title}</div>
						<div className="amount">{text.count}</div>
						<div className="square">
							{text.square}
							<sup>2</sup>
						</div>
						<div className="p">{text.text}</div>
					</div>
				</div>
				<Link className="link" to={locationRooms}>
					<button type="button" className="button">
						Подробнее
					</button>
				</Link>
			</div>
		);
	}
}
