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
			      <th>Start Date</th>
			      <th>End Date</th>
			    </tr>
			  </thead>
			  <tbody>
			    <tr>
			      <td>1</td>
			      <td>Mark</td>
			      <td>Otto</td>
			      <td>@mdo</td>
			    </tr>
			    <tr>
			      <td>2</td>
			      <td>Jacob</td>
			      <td>Thornton</td>
			      <td>@fat</td>
			    </tr>
			    <tr>
			      <td>3</td>
			      <td colSpan="2">Larry the Bird</td>
			      <td>@twitter</td>
			    </tr>
			  </tbody>
			</Table>
		)
	}
}

export default TournamentTableComponent;