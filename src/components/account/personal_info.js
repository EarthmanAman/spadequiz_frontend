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
			<div className="personal-info">
				<Table striped bordered hover variant="dark">
				  <thead>
				    <tr>
				      <th>Username</th>
				      <th>Email</th>
				      <th>Birthday</th>
				      <th>Gender</th>
				      <th>Member Since</th>
				    </tr>
				  </thead>
				  <tbody>
				    <tr>
				      <td>{this.props.user.username}</td>
				      <td>{this.props.user.email}</td>
				      <td>{this.props.user.birthday.formated}</td>
				      <td>{this.props.user.gender}</td>
				      <td>{this.props.user.start_date.weekday},{this.props.user.start_date.month},{this.props.user.start_date.day},{this.props.user.start_date.year}</td>
				    </tr>
				  </tbody>
				</Table>
			</div>
		)
	}
}

export default GamesStatComponent