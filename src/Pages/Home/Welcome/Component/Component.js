import React from "react";
import {Link} from "react-router-dom";

import Text from "./Text";
import Image from "./Image";
import Info from "./Info";

const locationRooms = {
	pathname: "/rooms",
};

export default class Component extends React.Component {
	render() {
		return (
			<div className="content">
				<div className="left">
					<Text />
					<Image />
				</div>
				<div className="right">
					<Info />
					<Link className="link" to={locationRooms}>
						<button type="button" className="button">
							Наши номера
						</button>
					</Link>
				</div>
			</div>
		);
	}
}
