import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ instagram, vk, whatsapp }) => {
	return (
		<footer className="Footer">
			<div className="content">
				<ul>
					<li>
						<Link className="link" to="/rooms">
							Номера и цены
						</Link>
					</li>
					<li>
						<Link className="link" to="/rooms">
							Забронировать
						</Link>
					</li>
					<li>
						<Link className="link" to="/home">
							Услуги
						</Link>
					</li>
					<li>
						<Link className="link" to="/home">
							Контакты
						</Link>
					</li>
				</ul>
				<div className="flex__address">
					<a className="address" href="https://yandex.fr/maps/-/CCUAbGQQdC" target="_black">
						Республика Крым,
						<br /> Береговое, ул. Приморская, 1В
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
			</div>
		</footer>
	);
};
export default Footer;
