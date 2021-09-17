import React from "react"
import { 
  MdGrade,
} from "react-icons/md";
import {Table, Button, Modal, Form, Alert} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import '../../../themes/tournament.css';
import Title from "../../home/title"


class OpenTournamentRegister extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			today:"outline-secondary",
			tommorrow:"outline-secondary",
			upcoming:"outline-secondary",
			show: false,
			create: false,
			join: false,
			single:false,

			partner:null,
			name: null,
			title: null,


		}
	}

	handleToday = (e) => {
		e.preventDefault()
		this.setState({
			today:"outline-primary",
			tommorrow:"outline-secondary",
			upcoming:"outline-secondary",
			show: true,
			create: true,
			join:false,
			single:false,
			title: "Create Team",
		})
	}

	handleClose = () => {
		this.setState({show:false, create:false})
	}
	handleTommorrow = (e) => {
		e.preventDefault()
		this.setState({
			today:"outline-secondary",
			tommorrow:"outline-primary",
			upcoming:"outline-secondary",
			show: true,
			join: true,
			create: false,
			single:false,
			title: "Join Team",
		})
	}

	handleUpcoming = (e) => {
		e.preventDefault()
		this.setState({
			today:"outline-secondary",
			tommorrow:"outline-secondary",
			upcoming:"outline-primary",
			show:true,
			single: true,
			create:false,
			join: false,
			title: "Register as Single",
		})
	}

	handleChange = e => {
	    this.setState({ [e.target.name]: e.target.value, show_error:false, spinner:false });
	};

	render() {
		return (
			<div className="tournament-content-2">
				<Title title="Open Partnership Tournament"/>
				<div className="tournament-buttons">
					<Button className="tournament-button" onClick={this.handleToday} variant={this.state.today}>Create Team</Button>
					<Button className="tournament-button" onClick={this.handleTommorrow} variant={this.state.tommorrow}>Join Team</Button>
					<Button className="tournament-button" onClick={this.handleUpcoming} variant={this.state.upcoming}>Register as Single</Button>
				</div>
				<div className="open-tournament-table">
					<Table striped bordered variant="dark">
			 
						  <tbody>
						  	<tr>
							    <td>Name</td>
							    <td>Name</td>
							</tr>
							<tr>
							    <td>TD Head</td>
							    <td>Name</td>
							</tr>
							<tr>
							    <td>Type</td>
							    <td>Name</td>
							</tr>
							<tr>
							    <td>Elimination</td>
							    <td>Name</td>
							</tr>
							<tr>
							    <td>Start Date - Time</td>
							    <td>Name</td>
							</tr>
					    		
					    	<tr>
							    <td>End Date - Time</td>
							    <td>Name</td>
							</tr>

							<tr>
							    <td>No. of Players</td>
							    <td>Name</td>
							</tr>
					  		</tbody>
					</Table>
				</div>
				<Modal 
					show={this.state.show} 
					onHide={this.handleClose}
					size="md"
      				aria-labelledby="contained-modal-title-vcenter"
      				centered


				>
			        <Modal.Header>
			          <Modal.Title>{this.state.title}</Modal.Title>
			        </Modal.Header>
			        <Modal.Body>
			        	{this.state.create ?
			        	<Form>
			        		
			        			
		        			<Form.Group className="mb-3" controlId="formBasicEmail">
							    <Form.Label className="input-title">Team Name</Form.Label>
							    <Form.Control type="text" name="name" onChange={this.handleChange}/>
							  </Form.Group>
							  <Form.Group className="mb-3" controlId="formBasicEmail">
							    <Form.Label className="input-title">Partner Username</Form.Label>
							    <Form.Control type="text" name="partner" onChange={this.handleChange}/>
							  </Form.Group>

						 	<Button variant="primary" onClick={this.handleSubmit}>
					            Create
					        </Button>
						</Form> : null}

						{this.state.join ? 
							<div>
								<h6 style={{"color": "brown"}}><em>You can only join a team if you are invited. Go to Pending Confirmation Page in tournament main page.</em></h6>
							</div> : null}
						{this.state.single ?
							<div>
								<h6>By registering as a single player you agree that the system will automatically assign a partner to you.</h6>
								<Button>Agree and Continue</Button>
							</div>: null}
			        </Modal.Body>
			        <Modal.Footer>
			          <Button variant="secondary" onClick={this.handleClose}>
			            Close
			          </Button>
			          
			        </Modal.Footer>
     			 </Modal>
			</div>
		)
	}
}

export default OpenTournamentRegister;