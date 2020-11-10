import React from "react";

export default class Info extends React.Component {
	render() {
		return (
			<div className="info">
				<div className="span">
					<div className="p">1</div>
					минута <br />
					до моря
				</div>
				<div className="span">
					<div className="p">22</div>
					номера
				</div>
				<div className="span">
					<div className="p">428</div>
					довольных <br />
					гостей
				</div>
				<div className="span">
					<div className="p">10</div>
					км до вокзала
				</div>
			</div>
		);
	}
}
