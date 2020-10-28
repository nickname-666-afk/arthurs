import React from "react";

import Text from "./Text";
import Icon from "../../../../Common/Files/Icon";
import Tel from "../../../../Common/Files/Tel";

const Component = () => {
	return (
		<div className="content">
			<Text />
			<Icon />
			<Tel />
			<a href="/rooms">
				<button type="button" className="button">
					Забронировать
				</button>
			</a>
		</div>
	);
};
export default Component;
