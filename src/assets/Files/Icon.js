import React from "react";

import instagram from "../images/instagram.png";
import vk from "../images/vk.png";
import whatsapp from "../images/whatsapp.png";

const Icon = () => {
	return (
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
	);
};

export default Icon;
