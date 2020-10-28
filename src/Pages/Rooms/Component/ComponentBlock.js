import React from "react";

import Carousel from "nuka-carousel";
import {NavLink} from "react-router-dom";
export const Context = React.createContext();

export default class ComponentBlock extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		purchase: this.props.room.price,
	// 	};
	// 	// this.handleClick = this.handleClick.bind(this);
	// }
	// rooms(event) {
	// 	event.preventDefault();
	// 	console.log("Click");
	// 	this.setState((prevState) => ({
	// 		isToggle: !prevState.isToggleOn,
	// 	}));
	// }

	// handleRoom = (value) => {
	// 	this.setState({room: value});
	// };

	//consumer = (<Context.Consumer>{(context) => this.countUpdate(context)}</Context.Consumer>);

	render() {
		// const room = [];
		// for (let i = 0; i < this.state.roomNum; i += 1) {
		// 	room.push(<ComponentBlock key={i} />);
		// }
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
					{/* <Context.Consumer>
						{(context) => ( */}
					<NavLink to="/service">
						<button className="button" onClick={() => ''}>
							Забронировать
						</button>
					</NavLink>
					{/* )}
					</Context.Consumer> */}
				</div>
			</div>
		);
	}
}
