import React from "react"
import {connect} from "react-redux";
import Loader from "react-loader-spinner";
import { Button, Table} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import '../../themes/tournament.css';
import {
	CONFIRMED_PARTNERSHIP_ACTION,
	MY_TOURNAMENTS_ACTION
} from 	"../../store/actions/actions"

class PendingsComponent extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			spinner:false,
		}
	}

	UNSAFE_componentWillReceiveProps = async(next_props) => {
		if(next_props.confirm_partnership.confirmed === true && this.props.confirm_partnership !== next_props.confirm_partnership){
			await this.props.MY_TOURNAMENTS_ACTION(next_props.user.username)
			this.setState({
				spinner:false
			})
			return false
		}
	}

	handleConfirm = async (e, id) => {
		e.preventDefault();
		e.stopPropagation()
		await this.props.CONFIRMED_PARTNERSHIP_ACTION(id, true)
		
		this.setState({
			spinner:true
		})
		console.log("in confirm")
		return false
	}
	render() {
		
		return (
			<div className="tournament-content-2" style={{"padding-top":20}}>
			<Loader
			        type="ThreeDots"
			        color="#00BFFF"
			        height={100}
			        width={100}
			        timeout={4000}
			        visible={this.state.spinner}
			        className="spinner"
			      />
			<Table striped bordered variant="dark">
			  <thead>
			    <tr>
			      <th>Team_Name</th>
			      <th>Partner_Name</th>
			      <th>Tournament</th>
			      <th>Start_Date</th>
			      <th>Start_Time</th>
			      <th>Confirm</th>
			    </tr>
			  </thead>
			  <tbody>
			  	{this.props.my_tournaments.pendings.map((pending) => 
			  		<tr>
				      <td>Name</td>
				      <td>{pending.partner1.username}</td>
				      <td>{pending.tournament.name}</td>
				      <td>{pending.tournament.start_date.date}</td>
				      <td>{pending.tournament.start_date.time}</td>
				      <td><Button variant="primary" onClick={(e) => this.handleConfirm(e, pending.id)}>Confirm</Button></td>
				    </tr>
			  	)}
			    
			    
			  </tbody>
			</Table>
			</div>
		)
	}
}

const mapStateToProps = state => {
  return {
    confirm_partnership: state.list_reducer.confirm_partnership,
    user: state.auth_reducer.user,
    my_tournaments: (state.list_reducer.my_tournaments) ? state.list_reducer.my_tournaments: [],
  };
};

const mapDispatchToProps =  {
    CONFIRMED_PARTNERSHIP_ACTION,
    MY_TOURNAMENTS_ACTION,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PendingsComponent);
