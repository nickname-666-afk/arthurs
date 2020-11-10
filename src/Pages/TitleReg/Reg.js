import React from "react";

import Form from "../../Common/Component/Form/Form";
import "./RegStyle.scss";

export default class Reg extends React.Component {
	render() {
		return (
			<div className="Registration">
				<div>{this.props.price}</div>
				<Form />
			</div>
		);
	}
}
