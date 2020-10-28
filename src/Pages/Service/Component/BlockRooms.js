import React from "react";

import {Context} from "../../Rooms/Component/ComponentBlock";

export default class BlockRooms extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {content: ""};
	// }

	// handleDataContent = (event) => {
	// 	this.setState({content: event.value});
	// };
	// updateDataContent = (value) => {
	// 	this.setState({content: value});
	// };

	consumer = (<Context.Consumer>{(context) => this.countUpdate(context)}</Context.Consumer>);

	render() {
		return <div className="block__rooms"></div>;
	}
}
