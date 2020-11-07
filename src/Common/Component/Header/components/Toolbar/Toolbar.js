import React from "react";
import {Link} from "react-router-dom";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import MenuList from "../../../../Files/MenuList";
import "./Toolbar.modules.scss";

const locationHome = {
	pathname: "/home",
};

const Toolbar = (click) => (
	<div className="toolbar">
		<div className="toolbar__navigation">
			<DrawerToggleButton click={click.drawerClickHandler} />
			<div className="toolbar__logo">
				<Link className="link" to={locationHome}>
					Отель Arthurs
				</Link>
			</div>
			<div className="spacer" />
			<div className="toolbar_navigation-items">
				<MenuList />
			</div>
		</div>
	</div>
);

export default Toolbar;
