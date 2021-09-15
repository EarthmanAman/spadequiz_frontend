import React from "react";
import {Table} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import '../../themes/account.css';

class GamesStatComponent extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			show:false
		}
	}

	render() {
		return (
			<div className="games-stat-info">
				<Table bordered variant="dark">
				  <thead>
				    <tr>
				      <th>Rank</th>
				      <th colSpan={3}>Win-Loss records</th>
				      <th>Skill Rating</th>
				      <th>Win %</th>
				      <th>Streak</th>
				      <th>Days idle</th>
				      <th colSpan={2}>Ranks Played</th>
				      <th colSpan={3}>Member Since</th>
				    </tr>
				  </thead>
				  <tbody>
				    <tr>
				      <td rowSpan={2}>97</td>
				      <td>Lifetime</td>
				      <td>Week</td>
				      <td>Month</td>
				      <td rowSpan={2}>65 145</td>
				      <td rowSpan={2}>69.12</td>
				      <td rowSpan={2}>-4</td>
				      <td rowSpan={2}>0</td>
				      <td>Average</td>
				      <td>Higher</td>
				      <td>Rank</td>
				      <td>Skill</td>
				      <td>Streak</td>
				    </tr>
				    <tr>
				      <td>3362_1502</td>
				      <td>14_12</td>
				      <td>35_24</td>
				      <td>48.11</td>
				      <td>25.51</td>
				      <td>1</td>
				      <td>32767</td>
				      <td>34</td>
				    </tr>
				  </tbody>
				</Table>
			</div>
		)
	}
}

export default GamesStatComponent