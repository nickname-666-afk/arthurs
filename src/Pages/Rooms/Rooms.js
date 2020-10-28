import React from "react";

import Room from "./Component/Room";
import "./RoomsStyle.scss";
export const MContext = React.createContext();

export default class Rooms extends React.Component {
	// updatePrice = (value) => {
	// 	this.setState({price: value});
	// };

	render() {
		return (
			<MContext.Provider>
				<div className="Rooms">
					{/* // value={{
					// 	state: this.state,
					// 	setMessage: (value) =>
					// 		this.setState({
					// 			message: value,
					// 		}),
					// 	setCount: (value) => this.setState({count: value}),
					// }}
					
					{this.props.children} */}
					<div className="component">
						<div className="content">
							<div className="title"> Наши номера</div>
							<Room />
						</div>
					</div>
				</div>
			</MContext.Provider>
		);
	}
}
