import React from "react"
import {Container} from "react-bootstrap"
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css"
import BaseOne from "../common/base1"
import MainOne from "../common/main1"
import '../../themes/home.css';
import LeagueLeadeComponent from "./league_leaders"
import LeagueAnnouncementComponent from "./league_announcement"
import TournamentComponent from "./tournament"
import {
	MY_LEAGUE_ACTION,
	MY_LEAGUE_ANNOUNCEMENT_ACTION,
} from "../../store/actions/actions"

class HelperComponent extends React.Component {
	render() {
		return (
			<div>
				<LeagueLeadeComponent/>
				<LeagueAnnouncementComponent announcements={this.props.my_league_announcements}/>
				<TournamentComponent />
			</div>
		)
	}
}

class HomeComponent extends React.Component {
	componentDidMount = async() => {
		await this.props.MY_LEAGUE_ACTION("spadequiz")
		await this.props.MY_LEAGUE_ANNOUNCEMENT_ACTION("spadequiz")
	}
	render() {
		console.log(this.props.my_league)
		return (
			<div className="main">
				<BaseOne />
				<MainOne content={<HelperComponent my_league_announcements={this.props.my_league_announcements}/>}/>
			</div>
		)
	}
}

const mapStateToProps = state => {
  return {
    my_league: state.list_reducer.my_league,
    my_league_announcements: state.list_reducer.my_league_announcements,
    my_league_error: state.list_reducer.my_league_error,
    my_league_announcements_error: state.list_reducer.my_league_announcements_error,
  };
};

const mapDispatchToProps =  {
    MY_LEAGUE_ACTION,
    MY_LEAGUE_ANNOUNCEMENT_ACTION,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);


