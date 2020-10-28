import React, {Fragment} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";

import Header from "./Common/Component/Header/Header";
import Footer from "./Common/Component/Footer/Footer";
import Home from "./Pages/Home/Home";
import Rooms from "./Pages/Rooms/Rooms";
import Data from "./Pages/Data/Data";
import Service from "./Pages/Service/Services";
import Registration from "./Pages/Registration/Registration";
import "./AppStyle.scss";

export default class App extends React.Component {
	render() {
		const AppLayout = (content) => {
			return (
				<Fragment>
					<Header />
					{content}
					<Footer />
				</Fragment>
			);
		};
		return (
			<BrowserRouter>
				<div className="App">
					<Switch>
						<Route exact path="/home" render={() => AppLayout(<Home />)} />
						<Route path="/rooms" render={() => AppLayout(<Rooms />)} />
						<Route path="/data" render={() => AppLayout(<Data />)} />
						<Route path="/service" render={() => AppLayout(<Service />)} />
						<Route path="/registration" render={() => AppLayout(<Registration />)} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}
