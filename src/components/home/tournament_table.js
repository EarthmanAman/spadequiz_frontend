import React from "react"
import { 
  MdGrade,
} from "react-icons/md";
import {Container, Row, Col, Table} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import '../../themes/home.css';
import Title from "./title"

class TournamentTableComponent extends React.Component {
	render() {
		return (
			<Table striped bordered hover variant="dark">
			  <thead>
			    <tr>
			      <th>TD Head</th>
			      <th>Name</th>
			      <th>Start_Date</th>
			      <th>Start_Time</th>
			      <th>End_Date</th>
			      <th>End_Time</th>
			    </tr>
			  </thead>
			  <tbody>
			  	{this.props.data.map((tournament) => 
			  		<tr>
				      <td>{tournament.admin}</td>
				      <td>{tournament.name}</td>
				      <td>{tournament.start_date.date}</td>
				      <td>{tournament.start_date.time}</td>
				      <td>{tournament.end_date.date}</td>
				      <td>{tournament.end_date.time}</td>
				    </tr>
			  	)}
			    
			    
			  </tbody>
			</Table>
		)
	}
}

export default TournamentTableComponent;