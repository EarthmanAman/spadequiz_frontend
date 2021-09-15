import React from "react"
import {Container} from "react-bootstrap"
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
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
				<LeagueLeadeComponent leaders={this.props.leaders}/>
				<LeagueAnnouncementComponent announcements={this.props.my_league_announcements}/>
				<TournamentComponent />
			</div>
		)
	}
}

class HomeComponent extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			spinner:true
		}
	}

	componentWillReceiveProps(next_props){
		this.setState({
			spinner:false,
		})
	}
	componentDidMount = async() => {
		console.log("in component did mount")
		await this.props.MY_LEAGUE_ACTION("spadequiz")
		
	}
	render() {
		console.log(this.props.my_league)
		return (
			<div className="main">
				{this.props.my_league ?
				<BaseOne />: null}
				{this.props.my_league ? 
				<MainOne content={<HelperComponent leaders={this.props.my_league.members} my_league_announcements={this.props.my_league.announcements}/>}/>: null}
			<Loader
			        type="ThreeDots"
			        color="#00BFFF"
			        height={100}
			        width={100}
			        timeout={5000}
			        visible={this.state.spinner}
			        className="spinner"
			      />
			</div>
		)
	}
}

const mapStateToProps = state => {
  return {
    my_league: state.list_reducer.my_league,
    user: state.auth_reducer.user,
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


