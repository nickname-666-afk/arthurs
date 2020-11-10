import React, { Component } from "react";

import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";

export default class Header extends Component {
	state = {
		sideDrawerOpen: false,
	};
	drawerToggleClickHandler = () => {
		this.setState((prevState) => {
			return { sideDrawerOpen: !prevState.sideDrawerOpen };
		});
	};

	backdropClickHandler = () => {
		this.setState({ sideDrawerOpen: false });
	};

	hStyle = window.location.pathname.includes("/home")
		? { background: "transparent" }
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
			sideDrawer = <SideDrawer />;
			backdrop = <Backdrop click={this.backdropClickHandler} />;
		}
		return (
			<header className="header" style={this.hStyle}>
				<Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
				{sideDrawer}
				{backdrop}
			</header>
		);
	}
}
