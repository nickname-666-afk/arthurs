import React from "react";

export default class Text extends React.Component {
	render() {
		return (
			<div className="text">
				<h1 className="h">
					Лучший отдых <br />
					начинаеться здесь!
				</h1>
				<div className="p">
					Современный и уютный отель,
					<br />
					расположенный на берегу моря,
					<br />
					идеально подойдет для отдыха в Крыму
				</div>
			</div>
		);
	}
}
