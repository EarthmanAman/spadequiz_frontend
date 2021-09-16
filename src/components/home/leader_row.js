import React from "react"

import {Container, Row, Col, Button} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import Face from '../../assets/face1.jpg'; // with import
import '../../themes/home.css';

class LeaderRowComponent extends React.Component {
	render() {
		return (
			<div className="leader-row">
				<div className="league-row-title">
					<Button variant={"outline-secondary"} disabled>{this.props.title}</Button>
				</div>

				{this.props.leaders.map((leader) => 
					<div className="league-leader">
						<div className="image">
							<img src={`https://spadequizapi.herokuapp.com${leader.user.avatar}`} width="50" />
						</div>
						<div className="league-leader-content">
							<h6>{leader.user.username}</h6>
							<p>Rank: 1</p>
							<p>Joined:02/08/2021</p>
						</div>
					</div>
				)}
				


			</div>
		)
	}
}

export default LeaderRowComponent;