import React from "react"

import {Table, Button, Modal, Form, Row, Col} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import '../../themes/tournament.css';


class ReportedMatchesComponent extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			show_edit:false,
			show_audit:false,
		}
	}

	handleEditClick = () => {
		this.setState({show_edit:!this.state.show_edit})
	}

	handleAuditClick = () => {
		this.setState({show_audit:!this.state.show_audit})
	}

	handleChange = e => {
	    this.setState({ [e.target.name]: e.target.value, show_error:false });
	};

	render() {
		return (
			<div className="tournament-content-2">

			<Modal 
					show={this.state.show_edit} 
					onHide={this.handleEditClick}
					size="lg"
      				aria-labelledby="contained-modal-title-vcenter"
      				centered


				>
			        <Modal.Header>
			          <Modal.Title>Edit Report Loss</Modal.Title>
			        </Modal.Header>
			        <Modal.Body>
			        	
			        	<Form>
				    	
							<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
							    <Form.Label className="label">Partner Name</Form.Label>
							    <Form.Control type="text" placeholder="spade123" name="username" onChange={this.handleChange}/>
							</Form.Group>
							
							<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
								<Row>
									<Col>
										<Form.Label className="label">Opponent 1 Name</Form.Label>
							    		<Form.Control type="text" placeholder="spade123" name="username" onChange={this.handleChange}/>
									</Col>
									<Col>
										<Form.Label className="label">Opponent 2 Name</Form.Label>
							    		<Form.Control type="text" placeholder="spade123" name="username" onChange={this.handleChange}/>
									</Col>
								</Row>
							   
							</Form.Group>
							
							  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
							  	<Form.Label className="label">Missed Match</Form.Label>
							    <div key={`inline-radio`} className="mb-3">
							      <Form.Check
							        inline
							        label="No"
							        name="group1"
							        type="radio"
							        id={`inline-radio-1`}
							        style={{"color":"white"}}
							      />
							      <Form.Check
							        inline
							        label="Yes"
							        name="group1"
							        type="radio"
							        id={`inline-radio-2`}
							        style={{"color":"white"}}
							      />
							    </div>
							  </Form.Group>

							  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
							    <Form.Label className="label">Comment</Form.Label>
							    <Form.Control  
							    	as="textarea"
			      					placeholder="Leave a comment here"
			      					style={{ height: '100px' }} 
			      					name="comment"
			      					onChange={this.handleChange}/>
							  </Form.Group> 		
						  
						  <Button 
						  	type="submit" 
						  	variant="secondary"
						  	>EDIT REPORT</Button>
						</Form>
			        </Modal.Body>
			        <Modal.Footer>
			          <Button variant="secondary" onClick={this.handleEditClick}>
			            Close
			          </Button>
			          
			        </Modal.Footer>
     			 </Modal>

			<Table bordered variant="dark">
			  <thead>
			    <tr>
			      <th>Date</th>
			      <th>Winner</th>
			      <th>Loser</th>
			      <th>Game Type</th>
			      <th>Comment</th>
			      <th>Edit</th>
			      <th>Audit</th>
			    </tr>
			  </thead>
			  <tbody>
			  	
			  		<tr>
				      <td rowSpan={2}>03/05/2021</td>
				      <td>Player 1 </td>
				      <td>Player 1</td>
				      <td rowSpan={2}>2000</td>
				      <td rowSpan={2}>0</td>
				      <td rowSpan={2}>
				      	<Button onClick={this.handleEditClick}>Edit</Button>
				      </td>
				      <td rowSpan={2}><Button onClick={this.handleAuditClick}>Request Audit</Button></td>
				    </tr>
			  		<tr>
				      <td>Player 2 </td>
				      <td>Player 2</td>
			
				    </tr>
			    
			    
			  </tbody>
			</Table>


			<Modal 
					show={this.state.show_audit} 
					onHide={this.handleAuditClick}
					size="lg"
      				aria-labelledby="contained-modal-title-vcenter"
      				centered


				>
			        <Modal.Header>
			          <Modal.Title>Request an Audit</Modal.Title>
			        </Modal.Header>
			        <Modal.Body>
			        	
			        	<Form>
							  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
							    <Form.Label className="label">Note</Form.Label>
							    <Form.Control  
							    	as="textarea"
			      					placeholder="Leave a Note here"
			      					style={{ height: '100px' }} 
			      					name="comment"
			      					onChange={this.handleChange}/>
							  </Form.Group> 		
						  
						  <Button 
						  	type="submit" 
						  	variant="secondary"
						  	>Request Audit</Button>
						</Form>
			        </Modal.Body>
			        <Modal.Footer>
			          <Button variant="secondary" onClick={this.handleAuditClick}>
			            Close
			          </Button>
			          
			        </Modal.Footer>
     			 </Modal>
			</div>
		)
	}
}

export default ReportedMatchesComponent;