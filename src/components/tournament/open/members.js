import React from "react"
import { 
  MdGrade,
} from "react-icons/md";
import { Link } from "react-router-dom";
import {Table} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import '../../../themes/tournament.css';


class MembersComponent extends React.Component {
	render() {
		return (
			<div className="tournament-content-2">
			<Table striped bordered variant="dark">
			  <thead>
			    <tr>
			      <th>Team Name</th>
			      <th>Playe1</th>
			      <th>Player2</th>
			      <th>Ratings</th>
			      <th>Wins</th>
			      <th>Losses</th>
			      <th>Skills</th>
			    </tr>
			  </thead>
			  <tbody>
			  	
			  		<tr>
				      <td>Name</td>
				      <td>Player1</td>
				      <td>Player2</td>
				      <td>2000</td>
				      <td>0</td>
				      <td>0</td>
				      <td>2000</td>
				    </tr>
			  	
			    
			    
			  </tbody>
			</Table>
			</div>
		)
	}
}

export default MembersComponent;