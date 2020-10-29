import React from "react";

import sea from "../../../../Common/image/icon(1).png";
import ent from "../../../../Common/image/icon(2).png";
import safe from "../../../../Common/image/icon(3).png";
import wifi from "../../../../Common/image/icon(4).png";
import num from "../../../../Common/image/icon(5).png";
import st from "../../../../Common/image/icon(6).png";
import att from "../../../../Common/image/icon(7).png";
import ter from "../../../../Common/image/icon(8).png";

export default class Icons extends React.Component {
	render() {
		return (
			<div className="column">
				<div className="row">
					<div className="icon">
						<img src={sea} alt="Иконка" />
						<p className="p">Близко к морю</p>
					</div>
					<div className="icon">
						<img src={ent} alt="Иконка" />
						<p className="p">Развлечения в шаговой доступности</p>
					</div>
					<div className="icon">
						<img src={safe} alt="Иконка" />
						<p className="p">Охраняемая парковка</p>
					</div>
					<div className="icon">
						<img src={wifi} alt="Иконка" />
						<p className="p">Бесплатный WI-FI</p>
					</div>
				</div>
				<div className="row">
					<div className="icon">
						<img src={num} alt="Иконка" />
						<p className="p">Комфортные номера</p>
					</div>
					<div className="icon">
						<img src={st} alt="Иконка" />
						<p className="p">Близко к вокзалу</p>
					</div>
					<div className="icon">
						<img src={att} alt="Иконка" />
						<p className="p">Рядом достопримечательности</p>
					</div>
					<div className="icon">
						<img src={ter} alt="Иконка" />
						<p className="p">Красивая территория</p>
					</div>
				</div>
			</div>
		);
	}
}
