import React from "react";


import ElemServ from "../elemServ/ElemService";

export default class Service extends React.Component {
	isButton = window.location.pathname.includes("/home");
	bStyle = this.isButton ? {display: "none"} : {display: "inline"};
	constructor(props) {
		super(props);
		this.state = {windowWidth: window.innerWidth};
	}

	handleClick = () => {
		this.setState({count: this.state.assesoary});
		this.setState({count: this.state.breakfast});
		this.setState({count: this.state.transfer});
	};

	handleAminate = () => {
		this.setState((state) => ({}));
		// console.log(window.addEventListener("resize", this.handleResize));
	};

	render() {
		// const {windowWidth} = this.state;
		// console.log(this.state.fisrtPrice);

		return (
			// <ContentContext.Consumer value={this.handeling}>
			<div className="Service box" onMouseMove={this.handleAminate}>
				<div className="content-main">
					<div className="title">Услуги</div>
					{this.props.services.map((service) => {
						return <ElemServ key={service} service={service} />;
					})}
				</div>
			</div>
			// </ContentContext.Consumer>
		);
	}
}
