import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import HomeComponent from "../components/home/index"
import LoginComponent from "../components/auth/login"
import RegisterComponent from "../components/auth/register"
import EmailVerifyComponent from "../components/auth/verify_email"
import AccountComponent from "../components/account/index"
import TournamentComponent from "../components/tournament/index"

class MyRoutes extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path="/login" exact component={LoginComponent} />
					<Route path="/account" exact component={AccountComponent} />
					<Route path="/tournament" exact component={TournamentComponent} />
					<Route path="/register" exact component={RegisterComponent} />
					<Route path="/verify_email" exact component={EmailVerifyComponent} />
					<Route path="/" component={HomeComponent} />
				</Switch>
			</Router>
		)
	}
}

export default MyRoutes