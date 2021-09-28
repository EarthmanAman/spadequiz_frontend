import React from "react"
import { 
  MdGrade,
} from "react-icons/md";
import { Link } from "react-router-dom";
import {Container, Row, Col, Table, Button} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import '../../themes/tournament.css';


class TournamentTableComponent extends React.Component {
	render() {
		return (
			<Table striped bordered variant="dark">
			  <thead>
			    <tr>
			      <th>TD Head</th>
			      <th>Name</th>
			      <th>Type</th>
			      <th>Start_Date</th>
			      <th>Start_Time</th>
			      <th>End_Date</th>
			      <th>End_Time</th>
			      <th>More</th>
			    </tr>
			  </thead>
			  <tbody>
			  	{this.props.data.length > 0 ? 
			  		this.props.data.map((tournament) => 
			  		<tr>
				      <td>{tournament.admin}</td>
				      <td>{tournament.name}</td>
				      <td>{tournament.partnership}</td>
				      <td>{tournament.start_date.date}</td>
				      <td>{tournament.start_date.time}</td>
				      <td>{tournament.end_date.date}</td>
				      <td>{tournament.end_date.time}</td>
				      {this.props.action === "more" ?
				      <td><Link to="/tournament/sds"><Button variant="primary">{this.props.action}</Button></Link></td>:
				      <td><Link to="/my_tournament"><Button variant="primary">{this.props.action}</Button></Link></td>}
				    </tr>
			  	):

			  		<td colSpan={8}><h6>Nothing to show.</h6></td>
			  	}
			    
			    
			  </tbody>
			</Table>
		)
	}
}

export default TournamentTableComponent;