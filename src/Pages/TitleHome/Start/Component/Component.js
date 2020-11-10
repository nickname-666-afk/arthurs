import React from "react";

import Text from "./Text";
import Icon from "../../../../Common/Files/Icon";
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
				<div className="tel">+7 (958) 756-80-39</div>
				<Link className="link" to={location}>
					<button type="button" className="button">
						Забронировать
					</button>
				</Link>
			</div>
		);
	}
}
