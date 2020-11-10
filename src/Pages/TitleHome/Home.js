import React from "react";

import Start from "./Start/Start";
import Filter from "../../assets/Component/Filter/Filter";
import Welcome from "./Welcome/Welcome";
import ImageIcon from "./ImageIcon/ImageIcon";
import Numbers from "./Numbers/Numbers";
import Promotion from "./Promotion/Promotion";
import Handeling from "../../assets/Component/Handeling/Handeling";
import MenuFirst from "./MenuFirst/MenuFirst";
import MenuSecond from "./MenuSecond/MenuSecond";
import ContactMap from "./ContactMap/ContactMap";

export default class Home extends React.Component {
	render() {
		return (
			<div className="App">
				<Start />
				<Filter />
				<div className="component">
					<Welcome />
				</div>
				<div className="m">
					<ImageIcon />
				</div>
				<div className="component">
					<Numbers />
				</div>
				<div className="m">
					<Promotion />
				</div>
				<div className="component">
					<Handeling />
				</div>
				<div className="component">
					<MenuFirst />
				</div>
				<div className="component">
					<MenuSecond />
				</div>
				<ContactMap />
			</div>
		);
	}
}
