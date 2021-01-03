import React from "react";

import first from "../../assets/images/icons/1.png";
import second from "../../assets/images/icons/2.png";
import third from "../../assets/images/icons/3.png";
import fifth from "../../assets/images/icons/4.png";
import sixth from "../../assets/images/icons/5.png";
import seventh from "../../assets/images/icons/6.png";
import eight from "../../assets/images/icons/7.png";
import nineth from "../../assets/images/icons/8.png";

const Icons = () => {
	return (
		<div className="Icons box">
			<div className="content">
				<p className="title">Почему наши гости выбрают именно нас</p>
				<div className="component">
					<div className="column">
						<div className="row">
							<div className="icon">
								<img src={first} alt="Иконка" />
								<p className="p">Близко к морю</p>
							</div>
							<div className="icon">
								<img src={second} alt="Иконка" />
								<p className="p">Развлечения в шаговой доступности</p>
							</div>
							<div className="icon">
								<img src={third} alt="Иконка" />
								<p className="p">Охраняемая парковка</p>
							</div>
							<div className="icon">
								<img src={fifth} alt="Иконка" />
								<p className="p">Бесплатный WI-FI</p>
							</div>
						</div>
						<div className="row">
							<div className="icon">
								<img src={sixth} alt="Иконка" />
								<p className="p">Комфортные номера</p>
							</div>
							<div className="icon">
								<img src={seventh} alt="Иконка" />
								<p className="p">Близко к вокзалу</p>
							</div>
							<div className="icon">
								<img src={eight} alt="Иконка" />
								<p className="p">Рядом достопримечательности</p>
							</div>
							<div className="icon">
								<img src={nineth} alt="Иконка" />
								<p className="p">Красивая территория</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Icons;
