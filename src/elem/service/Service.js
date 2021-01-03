import React from "react";
import ElemServ from "../elemServ/ElemService";
const services = [{ accessory: 250, breakfast: 350, transfer: 200, bunk: 400 }];

export default class Service extends React.Component {
	isButton = window.location.pathname.includes("/home");
	bStyle = this.isButton ? { display: "none" } : { display: "inline" };
	constructor(props) {
		super(props);
		this.state = { windowWidth: window.innerWidth };
	}
	handleClick = () => {
		this.setState({ count: this.state.assesoary });
		this.setState({ count: this.state.breakfast });
		this.setState({ count: this.state.transfer });
	};
	handleAminate = () => {
		this.setState((state) => ({}));
	};

	render() {
		return (
			<div className="Service box" onMouseMove={this.handleAminate}>
				<div className="content-main">
					<div className="title">Услуги</div>
					{services.map((service) => {
						return <ElemServ key={service} service={service} />;
					})}
				</div>
			</div>
		);
	}
}
