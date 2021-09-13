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
				<Title title={"League Announcement"}/>

				{this.props.announcements.map((announcement) => 
					<div className="announcement">
						<div className="from">
							<h6>From Admin</h6>
						</div>
						<div className="message">
							<p>{announcement.message}</p>
						</div>
					</div>
				)}
				
				
			</div>
		)
	}
}

export default LeagueLeaderComponent;