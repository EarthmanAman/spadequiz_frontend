import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import HomeComponent from "../components/home/index"
import LoginComponent from "../components/auth/login"
import RegisterComponent from "../components/auth/register"
import EmailVerifyComponent from "../components/auth/verify_email"
import AccountComponent from "../components/account/index"
import TournamentComponent from "../components/tournament/index"
import MyTournComponent from "../components/tournament/my_tourn/index"
import TournamentDetailComponent from "../components/tournament/open/index"
import RulesComponent from "../components/rules/index"
import NewsComponent from "../components/news/index"
import ReportComponent from "../components/report/index"

class MyRoutes extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path="/login" exact component={LoginComponent} />
					<Route path="/account" exact component={AccountComponent} />
					<Route path="/report" exact component={ReportComponent} />
					<Route path="/tournament" exact component={TournamentComponent} />
					<Route path="/my_tournament" exact component={MyTournComponent} />
					<Route path="/rules" exact component={RulesComponent} />
					<Route path="/news" exact component={NewsComponent} />
					<Route path="/tournament/:league_name" component={TournamentDetailComponent} />
					<Route path="/register" exact component={RegisterComponent} />
					<Route path="/verify_email" exact component={EmailVerifyComponent} />
					<Route path="/" component={HomeComponent} />
				</Switch>
			</Router>
		)
	}
}

export default MyRoutes