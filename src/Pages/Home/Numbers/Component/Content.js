import React from "react";
import {Link} from "react-router-dom";

const locationRooms = {
	pathname: "/rooms",
};

export default class Content extends React.Component {
	render() {
		const info = this.props.info;
		return (
			<div className="list">
				<div className="column">
					<div className="image">
						<img
							src={require(`../../../../Common/image/${this.props.image}.png`)}
							alt="Изображение"
						/>
					</div>
					<div className="text">
						<div className="title">{info.title}</div>
						<div className="amount">{info.count}</div>
						<div className="square">
							{info.square}
							<sup>2</sup>
						</div>
						<div className="p">{info.text}</div>
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
