import React from "react";
import { Link } from "react-router-dom";

const Start = ({ instagram, vk, whatsapp, button }) => {
	return (
		<div className="Start">
			<div className="content">
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
				<div className="icon">
					<a
						className="link"
						href="https://www.instagram.com/accounts/login/?next=/arturnechaev/"
						target="_black">
						<img src={instagram} alt="Instagram" />
					</a>
					<a
						className="link"
						href="https://www.vk.com/accounts/login/?next=/arturnechaev/"
						target="_black">
						<img src={vk} alt="VK" />
					</a>
					<a className="link" href="whatsapp" target="_black">
						<img src={whatsapp} alt="WhatsApp" />
					</a>
				</div>
				<div className="tel">
					<div className="flex__phone">
						<a className="mobile_phone" href="tel: +7 (978) 030-71-52">
							+7 (978) 030-71-52
						</a>
					</div>
					<div className="flex__phone">
						<a className="mobile_phone" href="tel: +7 (928) 362-63-33">
							+7 (928) 362-63-33
						</a>
					</div>
				</div>
				<div className="group-button">
					<Link className="link" to="/rooms">
						<button type="button" className="button">
							Забронировать
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Start;
