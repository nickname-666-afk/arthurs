import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Header from "./elem/header/Header";
import Footer from "./elem/footer/Footer";
import Home from "./pages/home/Home";
import Rooms from "./pages/rooms/Rooms";
// import Services from "./pages/services/Services";
// import Reg from "./pages/reg/Reg";
import NotFoundPage from "./pages/NotFoundPage";
import "./styles/AppStyle.scss";
import instagram from "./assets/images/icons/instagram.png";
import vk from "./assets/images/icons/vk.png";
import whatsapp from "./assets/images/icons/whatsapp.png";

const Arthurs = () => {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path="/home" component={Home} />
				<Route exact path="/rooms" component={Rooms} />
				{/* <Route exact path="/services" component={Services} /> */}
				{/* <Route path="/reg" component={Reg} /> */}
				<Route path="*" component={NotFoundPage} />
				<Redirect to="*" />
			</Switch>
			<Footer instagram={instagram} vk={vk} whatsapp={whatsapp} />
		</Router>
	);
};
export default Arthurs;
