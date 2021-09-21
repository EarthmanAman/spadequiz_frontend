import React from "react"
import { 
  MdGrade,
} from "react-icons/md";
import { Link } from "react-router-dom";
import {Table, Button} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import '../../../themes/tournament.css';
import Title from "../../home/title"

class NextMatchesComponent extends React.Component {
	render() {
		return (
			<div className="tournament-content-2">
			<Title title="Tournament Results"/>
			<Table bordered variant="dark">
			  
			  <tbody>
			  	
			  		<tr>
				      <td>Team_Name</td>
				      <td>Player_1</td>
				      <td>Player_2</td>
				      <td>Rank</td>
				      <td>Rating</td>
				      <td>Checked_in</td>
				      <td>Status</td>
				      <td>Record</td>
				    </tr>
			  		<tr>
				      <td>Name</td>
				      <td>Player</td>
				      <td>Player</td>
				      <td>30</td>
				      <td>100</td>
				      <td>Yes</td>
				      <td>Eliminated</td>
				      <td>2-1</td>
				      
				    </tr>
			    
			    
			  </tbody>
			</Table>
			</div>
		)
	}
}

export default NextMatchesComponent;