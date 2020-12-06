import React from "react";

import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
// import ls from "local-storage";

import Header from "./elem/header/Header";
import Footer from "./elem/footer/Footer";
import Home from "./pages/home/Home";
import Rooms from "./pages/rooms/Rooms";
import Services from "./pages/services/Services";
import Reg from "./pages/reg/Reg";
import NotFound from "./pages/NotFound";

import "./styles/AppStyle.scss";

import instagram from "./assets/images/icons/instagram.png";
import vk from "./assets/images/icons/vk.png";
import whatsapp from "./assets/images/icons/whatsapp.png";

const ContentContext = React.createContext(null);

const routeRooms = {
	pathname: "/rooms",
};
const roteService = {
	pathname: "/services",
};
const routeContact = {
	pathname: "/contact",
};
const icons = [
	<div className="icon" key={0}>
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
	</div>,
];
const phone = [
	<div className="tel" key={1}>
		<a className="link" href="tel: +7 (958) 756-80-39">
			+7 (958) 756-80-39
		</a>
	</div>,
];
const address = [
	<div className="p" key={2}>
		Республика Крым,
		<br /> Береговое, ул. Приморская, 1В
	</div>,
];
const sidebar = [
	<ul key={3}>
		<li>
			<Link className="link" to={routeRooms}>
				Номера и цены
			</Link>
		</li>
		<li>
			<Link className="link" to={routeRooms}>
				Забронировать
			</Link>
		</li>
		<li>
			<Link className="link" to={roteService}>
				Услуги
			</Link>
		</li>
		<li>
			<Link className="link" to={routeContact}>
				Контакты
			</Link>
		</li>
	</ul>,
];
// const cart = 0;
const services = [{accessory: 250, breakfast: 350, transfer: 200, bunk: 400}];

export default class App extends React.Component {
	render() {
		const {room} = this.props;
		const pages = (content) => {
			return (
				<React.Fragment>
					<Header sidebar={sidebar} />
					{content}
					<Footer sidebar={sidebar} phone={phone} icons={icons} address={address} />
				</React.Fragment>
			);
		};

		return (
			<BrowserRouter>
				<div className="App">
					<Switch>
						<ContentContext.Provider value={room}>
							<Route
								exact
								path="/home"
								render={() =>
									pages(<Home phone={phone} icons={icons} address={address} services={services} />)
								}
							/>
							<Route path="/rooms" render={() => pages(<Rooms />)} />
							<Route path="/services" render={() => pages(<Services services={services} />)} />
							<Route path="/reg" render={() => pages(<Reg />)} />
							<Route to="*" component={NotFound} />
						</ContentContext.Provider>
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}
