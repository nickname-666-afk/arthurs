import React from "react";

import instagram from "../image/instagram.png";
import vk from "../image/vk.png";
import whatsapp from "../image/whatsapp.png";

const Icon = () => {
	return (
		<div className="icon">
			<a
				className="link"
				href="https://www.instagram.com/accounts/login/?next=/arturnechaev/">
				<img src={instagram} alt="Instagram" />
			</a>
			<a
				className="link"
				href="https://www.instagram.com/accounts/login/?next=/arturnechaev/">
				<img src={vk} alt="VK" />
			</a>
			<a
				className="link"
				href="https://www.instagram.com/accounts/login/?next=/arturnechaev/">
				<img src={whatsapp} alt="WhatsApp" />
			</a>
		</div>
	);
};

export default Icon;