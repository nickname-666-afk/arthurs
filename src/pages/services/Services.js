import React from "react";
import { Link } from "react-router-dom";
import ElemServ from "../../elem/elemServ/ElemService";
const services = [{ accessory: 250, breakfast: 350, transfer: 200, bunk: 400 }];

const Services = () => {
	const cart = 0;
	return (
		<div className="Services">
			<div className="title">Дополнительные услуги</div>
			<div className="service">
				<div className="contentShow"></div>
				<div className="wrapper-serv__cart">
					{services.map((service) => {
						return <ElemServ key={service} service={service} price={0} />;
					})}
					<div className="cart">
						<div className="title">
							<div className="p">Сумма заказа:</div>
							<div className="p">{cart}</div>
						</div>
						<div className="content"></div>
						<Link className="link" to="/reg">
							<button className="button ls">Заказать</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Services;
