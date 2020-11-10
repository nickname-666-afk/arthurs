import React from "react";
import imgMenu from "../images/menu.svg";

export default class Button extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
		};
	}
	clickHandler() {
		this.setState((prev) => ({show: !prev.show}));
	}

	render() {
		return (
			<div className="button_block" onClick={this.clickHandler.bind(this)}>
				{this.state.show ? (
					<div className='backdrop'>
						<img className="image" src={imgMenu} alt="Меню" />
					</div>
				) : null}
				<button className="button trigger">Показать меню</button>
			</div>
		);
	}
}
