import React from "react";
import Header from "../../elem/header/Header";
import Room from "./Component/Room";

const Rooms = () => {
	return (
		<div className="Rooms">
			<Header />
			<div className="component">
				<div className="title"> Наши номера</div>
				<Room />
			</div>
		</div>
	);
};
export default Rooms;
