import React from "react";

export default class Text extends React.Component {
	render() {
		return (
			<div className="text">
				<div className="p">
					Современный и уютный отель, <br />
					расположенный на берегу моря,идеально подойдет для отдыха в Феодосии.
					<br />
					Мы позаботимся о том, чтобы Ваш отдых стал незабываемым! <br />
				</div>
				<br />
				<div className="p">
					Добро пожаловать в отель ARTHUR’S! <br />
					Отель "Артурс" подарит атфмосферу незабываемого отдыха на золотом пляже.
				</div>
				<br />
				<div className="p">Отель ARTHURS станет лучшим местом для семейного отдыха в Крыму.</div>
			</div>
		);
	}
}
