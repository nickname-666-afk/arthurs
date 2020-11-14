import React from "react";

import Room from "./Component/Room";
import "./RoomsStyle.scss";

export const RoomContext = React.createContext();

export default class Rooms extends React.Component {
	render() {
		const {room} = this.props;
		return (
			<RoomContext.Provider value={room}>
				<div className="Rooms">
					<div className="component">
						<div className="content">
							<div className="title"> Наши номера</div>
							<Room />
						</div>
					</div>
				</div>
			</RoomContext.Provider>
		);
	}
}
