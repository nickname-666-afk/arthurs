import React from "react";

import Text from "./Text";
import Icon from "../../../../Common/Files/Icon";
import Tel from "../../../../Common/Files/Tel";
import {Link} from "react-router-dom";

const location = {
	pathname: "/rooms",
};
export default class Component extends React.Component {
	render() {
		return (
			<div className="content">
				<Text />
				<Icon />
				<Tel />
				<Link className="link" to={location}>
					<button type="button" className="button">
						Забронировать
					</button>
				</Link>
			</div>
		);
	}
}
