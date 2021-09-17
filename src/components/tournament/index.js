import React from "react"
import {Container, Button} from "react-bootstrap"
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css"
import BaseTwo from "../common/base2"
import MainTwo from "../common/main2"
import '../../themes/tournament.css';
import Title from "../home/title"
import {
	USER_DETAIL_ACTION,
} from "../../store/actions/actions"

import NextTournamentComponent from "./next_tournaments"
import MyTournamentComponent from "./my_tournaments"
import PendingsComponent from "./pendings"

class HelperComponent extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			home:"outline-primary",
			home_active: "active-button",
			pending:"outline-secondary",
			pending_active:"",
			rules:"outline-secondary",
			rules_active: "",
		}
	}

	handlehome = (e) => {
		e.preventDefault()
		this.setState({
			home:"outline-primary",
			pending:"outline-secondary",
			rules:"outline-secondary",
			home_active: "active-button",
			pending_active: "",
			rules_active: "",
		})
	}

	handlepending = (e) => {
		e.preventDefault()
		this.setState({
			home:"outline-secondary",
			pending:"outline-primary",
			rules:"outline-secondary",
			pending_active: "active-button",
			home_active: "",
			rules_active: ""
		})
	}

	handlerules = (e) => {
		e.preventDefault()
		this.setState({
			home:"outline-secondary",
			pending:"outline-secondary",
			rules:"outline-primary",
			rules_active: "active-button",
			home_active: "",
			pending_active: "",
		})
	}

	render(){
		console.log(this.props.user)
		return (
			<div className="tournament-content">
				<div className="tournament-buttons">
					<Button className={`tournament-button ${this.state.home_active}`} onClick={this.handlehome} variant={this.state.home}>Home</Button>
					<Button className={`tournament-button ${this.state.pending_active}`} onClick={this.handlepending} variant={this.state.pending}>Pending Team Confirmation</Button>
					<Button className={`tournament-button ${this.state.rules_active}`} onClick={this.handlerules} variant={this.state.rules}>Tournament Rules</Button>
				</div>

				{this.state.home_active === "active-button" ?
				<div>
					<div className="tournament-content-2">
						<NextTournamentComponent tournaments={this.props.tournaments} />
					</div>

					<div className="tournament-content-2">
						<Title title={"My Tournaments"}/>
						{(this.props.user != null || this.props.user != undefined) ?
						<MyTournamentComponent my_tournaments={this.props.my_tournaments.my_tournaments} />:
						<h6>You must be logged in to view this</h6>}
					</div>
				</div>: null}
				{this.state.pending_active === "active-button" ?
				<div>
					<PendingsComponent />
				</div>: null}

			</div>
		)
	}
}

class TournamentComponent extends React.Component {
	componentDidMount = async() => {
	}

	render() {
		console.log(this.props.my_tournaments)
		return (
			<div className="main">
				<BaseTwo />
				<MainTwo content={<HelperComponent my_tournaments={this.props.my_tournaments} tournaments={this.props.my_league.tournaments} user={this.props.user}/>}/>
			</div>
		)
	}
}

const mapStateToProps = state => {
  return {
    my_league: state.list_reducer.my_league,
    my_tournaments: (state.list_reducer.my_tournaments) ? state.list_reducer.my_tournaments: [],
    user: state.auth_reducer.user,
  };
};

const mapDispatchToProps =  {
    USER_DETAIL_ACTION,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TournamentComponent);


