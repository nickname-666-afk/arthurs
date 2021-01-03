import React from "react";

const Maps = ({ instagram, vk, whatsapp }) => {
	return (
		<div className="Maps">
			<div className="content">
				<div className="flex">
					<div className="maps" style={{ position: "relative", overflow: "hidden" }}>
						<a
							href="https://yandex.com/maps?utm_medium=mapframe&utm_source=maps"
							style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "0px" }}>
							Яндекс.Карта
						</a>
						<a
							href="https://yandex.com/maps/?ll=35.440923%2C45.101212&mode=whatshere&sctx=ZAAAAAgCEAAaKAoSCR3J5T%2BkQkFAETt%2B%2B3yMfEZAEhIJj3kVAIDn%2Fz8RbO79iMWx7j8oCkCdkAdIAVXNzMw%2BWABqAnJ1cACdAc3MTD2gAQCoAQC9Abya%2Bm3CAQb2mef23wU%3D&sll=35.440923%2C45.101212&sspn=0.095106%2C0.045654&text=arthurs%20%20%D0%BA%D1%80%D1%8B%D0%BC&utm_medium=mapframe&utm_source=maps&whatshere%5Bpoint%5D=35.440449%2C45.100977&whatshere%5Bzoom%5D=12.67&z=14.39"
							style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "14px" }}>
							Villa — Яндекс.Карта
						</a>
						<iframe
							title="Arthurs - Villa"
							className="yandex-maps"
							src="https://yandex.com/map-widget/v1/-/CCUAu0HjCD"
						/>
					</div>
				</div>
				<div className="flex">
					<p className="title">Наши контакты</p>
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
					<div className="text">
						<div className="wrapper-text">
							<div className="address">
								<div className="title">Адрес:</div>
								<div className="address_link">
									<div className="flex__address">
										<a className="link" href="https://yandex.fr/maps/-/CCUAbGQQdC" target="_black">
											Республика Крым,
											<br /> Береговое, ул. Приморская, 1В
										</a>
									</div>
								</div>
							</div>
							<div className="email">
								<div className="title">E-MAIL:</div>
								<div className="email_link">
									<a className="link" href="mailto:info@arthurs-beregovoe.ru">
										info@arthurs-beregovoe.ru
									</a>
								</div>
							</div>
							<div className="phone">
								<div className="phone_text">Телефон:</div>
								<div className="phone_link">
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
							</div>
						</div>
						<a className="link" href="https://yandex.com/maps/-/CCUAu0HjCD" target="_black">
							<button className="button">Как проехать</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Maps;
