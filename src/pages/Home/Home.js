import React from "react";
import Start from "./Start";
import Filter from "../../elem/filter/Filter";
import Welcome from "./Welcome";
import Icons from "./Icons";
import Numbers from "./numbers/Numbers";
import Service from "../../elem/service/Service";
import Canteen from "./Canteen";
import Barbecue from "./Barbecue";
import Maps from "./Maps";
import instagram from "../../assets/images/icons/instagram.png";
import vk from "../../assets/images/icons/vk.png";
import whatsapp from "../../assets/images/icons/whatsapp.png";

const Home = () => {
	return (
		<div className="App">
			<Start instagram={instagram} vk={vk} whatsapp={whatsapp} />
			<Filter />
			<div className="component">
				<Welcome />
			</div>
			<Icons />
			<div className="component">
				<Numbers />
			</div>
			<div className="component">
				<Service />
			</div>
			<div className="component">
				<Canteen />
			</div>
			<div className="component">
				<Barbecue />
			</div>
			<Maps instagram={instagram} vk={vk} whatsapp={whatsapp} />
		</div>
	);
};
export default Home;
