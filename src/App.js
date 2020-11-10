import React, {Fragment} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";

import Header from "./assets/Component/Header/Header";
import Footer from "./assets/Component/Footer/Footer";
import Home from "./Pages/TitleHome/Home";
import Rooms from "./Pages/TitleRooms/Rooms";
import Service from "./Pages/TitleService/Service";
import Reg from "./Pages/TitleReg/Reg";
import "./AppStyle.scss";

const ContentContext = React.createContext(null);

export default class App extends React.Component {
	render() {
		const content = this.props;
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
						<ContentContext.Provider value={content}>
							<Route exact path="/home" render={() => AppLayout(<Home />)} />
							<Route path="/rooms" render={() => AppLayout(<Rooms />)} />
							<Route path="/service" render={() => AppLayout(<Service />)} />
							<Route path="/registration" render={() => AppLayout(<Reg />)} />
						</ContentContext.Provider>
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}
