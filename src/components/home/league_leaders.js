import React from "react"
import { 
  MdGrade,
} from "react-icons/md";
import {Container, Row, Col} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import BaseOne from "../common/base1"
import MainOne from "../common/main1"
import '../../themes/home.css';
import Title from "./title"
import LeaderRowComponent from "./leader_row"
import Face from '../../assets/face1.jpg'; // with import

class LeagueLeaderComponent extends React.Component {
	render() {
		return (
			<div className="content">
				<Title title={"League Leaders"}/>
				<Row>
					<Col>
						<LeaderRowComponent leaders={this.props.leaders} title={"Ratings"}/>
					</Col>
					<Col>
						<LeaderRowComponent leaders={this.props.leaders} title={"Win %"}/>
					</Col>
					<Col>
						<LeaderRowComponent leaders={this.props.leaders} title={"Win Streak"}/>
					</Col>
					<Col className="pow">
						<div className="pow_div">
							<div>
								<MdGrade style={{"color":"#D55222", "font-size":20, "margin-bottom":5}}/>
							</div>
							<div>
								<h5>Player of the Week</h5>
							</div>
							<div>
								<img src={Face} width="100"/>
							</div>
							<div className="win">
								<p className="first">Win %:</p>
								<p className="second">50 %</p>
							</div>
							<p>My comments</p>
						</div>
					</Col>
				</Row>
			</div>
		)
	}
}

export default LeagueLeaderComponent;