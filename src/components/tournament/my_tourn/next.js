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
			<Title title="Next Matches"/>
			<Table bordered variant="dark">
			  
			  <tbody>
			  	
			  		<tr>
				      <td rowSpan={2}>VS</td>
				      <td>Name</td>
				      <td>Team Name</td>
				      
				      <td>Date</td>
				      <td>League Time</td>
				      <td>Local Time</td>
				      <td rowSpan={2}><Button>Report</Button></td>
				    </tr>
			  		<tr>
				      <td>Name</td>
				      <td>Team</td>
				      <td>August, 23, 2021</td>
				      <td>04:30</td>
				      <td>01:00</td>
				      
				    </tr>
			    
			    
			  </tbody>
			</Table>
			</div>
		)
	}
}

export default NextMatchesComponent;