import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import HomeComponent from "../components/home/index"
import LoginComponent from "../components/auth/login"
import RegisterComponent from "../components/auth/register"
import EmailVerifyComponent from "../components/auth/verify_email"

class MyRoutes extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path="/:slug" exact component={HomeComponent} />
					<Route path="/login" exact component={LoginComponent} />
					<Route path="/register" exact component={RegisterComponent} />
					<Route path="/verify_email" exact component={EmailVerifyComponent} />
				</Switch>
			</Router>
		)
	}
}

export default MyRoutes