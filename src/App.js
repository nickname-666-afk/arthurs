import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Header from "./assets/Component/Header/Header";
import Footer from "./assets/Component/Footer/Footer";
import Home from "./pages/Home/Home";
import Rooms from "./pages/Rooms/Rooms";
import Service from "./pages/Service/Service";
import Reg from "./pages/Reg/Reg";
import NotFound from "./pages/NotFound/NotFound";
import "./AppStyle.scss";

const ContentContext = React.createContext("Hello");

export default class App extends React.Component {
	render() {
		const {room} = this.props;
		const pages = (content) => {
			return (
				<React.Fragment>
					<Header />
					{content}
					<Footer />
				</React.Fragment>
			);
		};

		return (
			<BrowserRouter>
				<div className="App">
					<Switch>
						<ContentContext.Provider value={room}>
							<Route exact path="/home" render={() => pages(<Home />)} />
							<Route path="/rooms" render={() => pages(<Rooms />)} />
							<Route path="/service" render={() => pages(<Service />)} />
							<Route path="/reg" render={() => pages(<Reg />)} />
							<Route path="*" component={NotFound} />
						</ContentContext.Provider>
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}
