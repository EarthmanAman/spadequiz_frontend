import React from 'react';
import { connect } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import {Button, Form, Row, Col, Alert} from "react-bootstrap"
import FileBase64 from 'react-file-base64';

import '../../themes/register.css';
import {REGISTER_USER} from "../../store/actions/actions"

class RegistrationForm extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	username: null,
	    	email: null,
	    	dob: null,
	    	password: null,
	    	confirm_password: null,
	    	avatar:null,

	    	show_error: true,
	    	next: false,
	    };

	  }

	handleChange = e => {
	    this.setState({ [e.target.name]: e.target.value, show_error:false });
	  };
	handleSubmit = async (e) => {
		e.preventDefault();

		const {username, email, dob, password, confirm_password, avatar} = this.state
		this.setState({show_error:true})
		console.log(avatar)
    	await this.props.REGISTER_USER(username, email, dob, password, confirm_password, avatar.base64)
	}
  	
  	componentWillReceiveProps(next_props){
  		console.log(next_props)
  		if(next_props.error === null && next_props.user !== undefined && next_props.user !== null && next_props.user.status_code === 201){
  			console.log("in here")
  			this.setState({next:true})
  		}
  	}
  	componentDidMount(){
  		this.setState({next:false})
  	}
  render() {
  	const {username, email, dob, password, confirm_password} = this.state
  	if(this.state.next) {
  		return <Redirect to="/verify_email" />
  	}

    return (
    	<div className="register-main">
    		<h3>Enter your Details to Register</h3>
    		<Form onSubmit={this.handleSubmit}>
	    		{(this.props.error && this.state.show_error) ? 
	    			Object.keys(this.props.error).map((key) => <Alert variant="danger">{key}: {this.props.error[key][0]}</Alert>): null
	    		}
	    		<Row>
	    			<Col>
	    				<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
						    <Form.Label className="label">Username</Form.Label>
						    <Form.Control name="username" type="text" placeholder="spade123" onChange={this.handleChange}/>
						  </Form.Group>

						  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
						    <Form.Label className="label">Email address</Form.Label>
						    <Form.Control name="email" type="email" placeholder="name@example.com" onChange={this.handleChange}/>
						  </Form.Group>

					  		<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
							    <Form.Label className="label">Birthday (year Optional)</Form.Label>
							    <Form.Control name="dob" type="date" onChange={this.handleChange}/>
							</Form.Group>
	    			</Col>
	    			<Col>
	    				<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
						    <Form.Label className="label">Avatar (Optional)</Form.Label>
						    <FileBase64 type="file" multiple={false} onDone={(base64) => this.setState({avatar:base64})} />

						</Form.Group>
				  

					  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
					    <Form.Label className="label">Password</Form.Label>
					    <Form.Control name="password" type="password" onChange={this.handleChange}/>
					  </Form.Group>

					  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
					    <Form.Label className="label">Confirm Password</Form.Label>
					    <Form.Control name="confirm_password" type="password" onChange={this.handleChange}/>
					  </Form.Group>
	    			</Col>
	    		</Row>
			  
			  <Button variant="secondary" type="submit">REGISTER</Button>
			</Form>
    	</div>
    	
    )
  }
}


const mapStateToProps = state => {
  return {
    user: state.auth_reducer.user,
    error: (state.auth_reducer.registration_error ? state.auth_reducer.registration_error.errors: null),
  };
};

const mapDispatchToProps =  {
    REGISTER_USER
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationForm);

