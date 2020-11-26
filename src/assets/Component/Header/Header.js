import React from "react";
import {Link} from "react-router-dom";

const routeHome = {
	pathname: "/home",
};
const scrollTop = () => {
	window.scrollTo({top: 0, behavior: "smooth"});
};

export default class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sideDrawerOpen: false,
		};
	}

	drawerToggleClickHandler = () => {
		this.setState((prevState) => {
			return {sideDrawerOpen: !prevState.sideDrawerOpen};
		});
	};

	backdropClickHandler = () => {
		this.setState({sideDrawerOpen: false});
	};
	sideDrawerOpen = () => {
		this.setState((prev) => ({sideDrawerOpen: !prev.sideDrawerOpen}));
		return this.tStyle ? {background: "red"} : {backgrond: "yellow"};
	};

	hStyle = window.location.pathname.includes("/home")
		? {background: "transparent"}
		: {
				background: "#FF7B51",
				boxShadow: "0px 4px 11px rgba(0, 0, 0, 0.25)",
				position: "fixed",
				zIndex: "999",
		  };

	render() {
		let sideDrawer;
		let backdrop;

		if (this.state.sideDrawerOpen) {
			sideDrawer = <nav className="side-drawer">{this.props.sidebar}</nav>;
			backdrop = (
				<div className="backdrop" onClick={this.sideDrawerOpen}>
					{this.props.click}
				</div>
			);
		}
		// &:active {
		// 	transition: all 2s ease;
		// 	.toggle-button__line:first-child {
		// 		position: absolute;
		// 		top: 12px;
		// 		left: 2px;
		// 		transform: rotate(45deg);
		// 	}
		// 	.toggle-button__line:nth-child(2) {
		// 		display: none;
		// 	}
		// 	.toggle-button__line:nth-child(3) {
		// 		position: absolute;
		// 		top: 12px;
		// 		left: 2px;
		// 		transform: rotate(-45deg);
		// 	}
		// }

		return (
			<header className="header" style={this.hStyle}>
				{this.state.sideDrawerOpen ? this.sideDrawer : null}
				<div className="toolbar">
					<div className="toolbar__navigation">
						<button className="toggle-button" onClick={this.sideDrawerOpen}>
							<div className="toggle-button__line" style={this.tStyle} />
							<div className="toggle-button__line" />
							<div className="toggle-button__line" />
						</button>
						<div className="toolbar__logo" onClick={scrollTop}>
							<Link className="link" to={routeHome}>
								Отель Arthurs
							</Link>
						</div>
						<div className="toolbar_navigation-items">{this.props.sidebar}</div>
					</div>
				</div>
				{sideDrawer}
				{backdrop}
			</header>
		);
	}
}
