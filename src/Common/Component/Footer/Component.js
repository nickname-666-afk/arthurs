import React from "react";

import MenuList from "../../Files/MenuList";
import Icon from "../../Files/Icon";
import Tel from "../../Files/Tel";
import Address from "../../Files/Address";

const Content = () => {
	return (
		<div className="content">
			<MenuList />
			<Address />
			<Tel />
			<Icon />
		</div>
	);
};

export default Content;
