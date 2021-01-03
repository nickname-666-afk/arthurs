import React from "react";
import { Link } from "react-router-dom";

const routeHome = {
	pathname: "/home",
};
// const scrollTop = () => {
// 	window.scrollTo({ top: 0, behavior: "smooth" });
// };

export default class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sideDrawerOpen: false,
			route: window.location.pathname.includes("/rooms"),
		};
	}
	drawerToggleClickHandler = () => {
		this.setState((prevState) => {
			return { sideDrawerOpen: !prevState.sideDrawerOpen };
		});
	};
	backdropClickHandler = () => {
		this.setState({ sideDrawerOpen: false });
	};
	sideDrawerOpen = () => {
		this.setState((prev) => ({ sideDrawerOpen: !prev.sideDrawerOpen }));
	};

	render() {
		let sideDrawer;
		let backdrop;
		if (this.state.sideDrawerOpen) {
			sideDrawer = (
				<nav className="side-drawer">
					<ul>
						<li>
							<Link className="link" to="/rooms">
								Номера и цены
							</Link>
						</li>
						<li>
							<Link className="link" to="/rooms">
								Забронировать
							</Link>
						</li>
						<li>
							<Link className="link" to="/home">
								Услуги
							</Link>
						</li>
						<li>
							<Link className="link" to="/home">
								Контакты
							</Link>
						</li>
					</ul>
				</nav>
			);
			backdrop = (
				<div className="backdrop" onClick={this.sideDrawerOpen}>
					{this.props.click}
				</div>
			);
		}
		return (
			<header
				className="Header"
				style={this.state.route ? { background: "red" } : { background: "green" }}>
				{this.state.sideDrawerOpen ? this.sideDrawer : null}
				<div className="toolbar">
					<div className="toolbar__navigation">
						<button className="toggle-button" onClick={this.sideDrawerOpen}>
							<div className="toggle-button__line" style={this.tStyle} />
							<div className="toggle-button__line" />
							<div className="toggle-button__line" />
						</button>
						<div className="toolbar__logo">
							<Link className="link" to={routeHome}>
								Отель Arthurs
							</Link>
						</div>
						<div className="toolbar_navigation-items">
							<ul>
								<li>
									<Link className="link" to="/rooms">
										Номера и цены
									</Link>
								</li>
								<li>
									<Link className="link" to="/rooms">
										Забронировать
									</Link>
								</li>
								<li>
									<Link className="link" to="/home">
										Услуги
									</Link>
								</li>
								<li>
									<Link className="link" to="/home">
										Контакты
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				{sideDrawer}
				{backdrop}
			</header>
		);
	}
}
