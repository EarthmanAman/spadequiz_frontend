import React from "react"
import {Container, Button} from "react-bootstrap"
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css"
import BaseTwo from "../../common/base2"
import MainTwo from "../../common/main2"
import '../../../themes/tournament.css';
import {
	USER_DETAIL_ACTION,
} from "../../../store/actions/actions"
import OpenTournamentRegister from "./register"


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

		return (
			<div className="tournament-content">
				<div className="tournament-buttons">
					<Button className={`tournament-button ${this.state.home_active}`} onClick={this.handlehome} variant={this.state.home}>Register</Button>
					<Button className={`tournament-button ${this.state.pending_active}`} onClick={this.handlepending} variant={this.state.pending}>Registered Teams</Button>
					<Button className={`tournament-button ${this.state.rules_active}`} onClick={this.handlerules} variant={this.state.rules}>Tournament Rules</Button>
				</div>
				<OpenTournamentRegister />
			</div>
		)
	}
}

class TournamentDetailComponent extends React.Component {
	componentDidMount = async() => {
	}

	render() {
		
		return (
			<div className="main">
				<BaseTwo />
				<MainTwo content={<HelperComponent />}/>
			</div>
		)
	}
}
export default TournamentDetailComponent