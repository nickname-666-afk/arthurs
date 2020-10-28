import React, { Component } from "react";

export default class Content extends Component {
	state = {
		image: "",
	};
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
						<div className="amount">{info.amount}</div>
						<div className="square">
							{info.square}
							<sup>2</sup>
						</div>
						<div className="p">{info.text}</div>
					</div>
				</div>
				<a className="link" href="/rooms">
					<button type="button" className="button">
						Подробнее
					</button>
				</a>
			</div>
		);
	}
}
