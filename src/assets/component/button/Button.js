import React from "react";

import img from "../../images/menu.svg";

export default class Button extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
		};
	}

	clickHandler = () => {
		this.setState((prev) => ({show: !prev.show}));
	};

	render() {
		return (
			<div className="button_block">
				{this.state.show ? (
					<div className="backdrop">
						<div className="wrapper-backdrop">
							<div className="wrapper-image">
								<div className="nav-image">
									<button className="btn-nav" onClick={this.clickHandler.bind(this)}>
										<div className="btn-line" /> <div className="btn-line" />
									</button>
								</div>
								<img className="image" src={img} alt="Меню" />
							</div>
						</div>
					</div>
				) : null}
				<button className="button" onClick={this.clickHandler.bind(this)}>
					Показать меню
				</button>
			</div>
		);
	}
}
