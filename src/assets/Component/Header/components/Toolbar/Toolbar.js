import React from "react";
import {Link} from "react-router-dom";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./Toolbar.modules.scss";

const home = {
	pathname: "/home",
};
const scrollTop = () => {
	window.scrollTo({top: 0, behavior: "smooth"});
};

const Toolbar = (click) => (
	<div className="toolbar">
		<div className="toolbar__navigation">
			<DrawerToggleButton click={click.drawerClickHandler} />
			<div className="toolbar__logo" onClick={scrollTop}>
				<Link className="link" to={home}>
					Отель Arthurs
				</Link>
			</div>
			<div className="spacer" />
			<div className="toolbar_navigation-items"></div>
		</div>
	</div>
);

export default Toolbar;
