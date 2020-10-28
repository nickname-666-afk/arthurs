import React from "react";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import MenuList from "../../../../Files/MenuList";
import "./Toolbar.modules.scss";
// import $ from "jquery";

// $(document).ready(function () {
// 	$(".toggle-button").click(function (event) {
// 		event.preventDefault();
// 		$(".slide-drawer").slideToggle(".toolbar_navigation-items");
// 		console.log("3");
// 	});
// });

const Toolbar = (click) => (
	<div className="toolbar">
		<div className="toolbar__navigation">
			<DrawerToggleButton click={click.drawerClickHandler} />
			<div className="toolbar__logo">
				<a className="link" href="/home">
					Отель Arthurs
				</a>
			</div>
			<div className="spacer" />
			<div className="toolbar_navigation-items">
				<MenuList />
			</div>
		</div>
	</div>
);

export default Toolbar;
