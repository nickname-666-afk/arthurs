import React from "react";

import App from "./App";
// import "./IndexStyle.scss";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById("root"),
);
