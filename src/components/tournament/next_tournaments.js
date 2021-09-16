import React from "react"
import { 
  MdGrade,
} from "react-icons/md";
import {Container, Row, Col, Button} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import '../../themes/tournament.css';
import Title from "../home/title"
import TournamentTable from "./tournament_table"

class TournamentCenterComponent extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			today:"outline-primary",
			tommorrow:"outline-secondary",
			upcoming:"outline-secondary",
		}
	}

	handleToday = (e) => {
		e.preventDefault()
		this.setState({
			today:"outline-primary",
			tommorrow:"outline-secondary",
			upcoming:"outline-secondary",
		})
	}

	handleTommorrow = (e) => {
		e.preventDefault()
		this.setState({
			today:"outline-secondary",
			tommorrow:"outline-primary",
			upcoming:"outline-secondary",
		})
	}

	handleUpcoming = (e) => {
		e.preventDefault()
		this.setState({
			today:"outline-secondary",
			tommorrow:"outline-secondary",
			upcoming:"outline-primary",
		})
	}


	render() {
		return (
			<div >
				
				<div className="tournament-buttons">
					<Button className="tournament-button" onClick={this.handleToday} variant={this.state.today}>Today</Button>
					<Button className="tournament-button" onClick={this.handleTommorrow} variant={this.state.tommorrow}>Tommorrow</Button>
					<Button className="tournament-button" onClick={this.handleUpcoming} variant={this.state.upcoming}>Upcoming Events</Button>
				</div>
				<div>
				{this.state.today === "outline-primary" ? 
					<TournamentTable data={this.props.tournaments.today} action={"more"}/>: null
				}
				{this.state.tommorrow === "outline-primary" ? 
					<TournamentTable data={this.props.tournaments.tommorrow} action={"more"}/>: null
				}
				{this.state.upcoming === "outline-primary" ? 
					<TournamentTable data={this.props.tournaments.upcoming} action={"more"}/>: null
				}
				</div>
			</div>
		)
	}
}

export default TournamentCenterComponent;