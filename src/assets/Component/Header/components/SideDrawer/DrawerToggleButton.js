import React from "react";

import "./DrawerToggleButton.scss";

const drawerToggleButton = (click) => (
	<button className="toggle-button" onClick={click.click}>
		<div className="toggle-button__line" />
		<div className="toggle-button__line" />
		<div className="toggle-button__line" />
	</button>
);

export default drawerToggleButton;
