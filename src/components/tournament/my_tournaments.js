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

	render() {
		
		return (
			<div >
				
				{this.props.my_tournaments !== undefined && this.props.my_tournaments.length !== 0 ? 
					<TournamentTable data={this.props.my_tournaments} action="view"/>: 
					<h6>Nothing to show.</h6>
				}
				
			</div>
		)
	}
}

export default TournamentCenterComponent;