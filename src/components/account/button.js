import React from "react";
import {Button, Alert, Modal, Form} from "react-bootstrap"
import { connect } from "react-redux";
import FileBase64 from 'react-file-base64';
import Loader from "react-loader-spinner";
import "bootstrap/dist/css/bootstrap.min.css"
import '../../themes/account.css';
import {
	UPDATE_USER_ACTION,
	USER_DETAIL_ACTION,
	UPDATE_PASSWORD_ACTION,
	MESSAGES_ACTION,
} from "../../store/actions/actions"

class ButtonComponent extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			show:false,
			show_error:true,
			old_password: null,
			new_password:null,
			confirm_new_password:null,
			username: this.props.user.username,
			email: this.props.user.email,
			dob: this.props.user.dob,
			gender: this.props.user.gender,
			avatar: null,

			spinner:false,
		}
	}

	componentWillReceiveProps = (next_props) => {
		console.log("in receive")
		

  		if(next_props.update_password_errors !== null && next_props.update_password_errors !== undefined){
  			this.setState({

  				show_error: true,
  			})
  			return
  		}

  		if(next_props.user === undefined && next_props.user == null){
  			
  			this.setState({
  				avatar:null,
  				show_error: true,

  			})
  			return
  		}

  		this.setState({
  			show:false,
  		})
  	}

	handleButtonClick = () => {
		this.setState({
			show:true
		})
	}
	handleClose = () => {
		this.setState({
			show:false
		})
	}

	handleChange = e => {
	    this.setState({ [e.target.name]: e.target.value, show_error:false, spinner:false });
	};

	handleSubmit = async(e) => {
		e.preventDefault()
		const {username, email, dob, gender, avatar, old_password, new_password, confirm_new_password} = this.state
		if(this.props.key_value === "password"){
			await this.props.UPDATE_PASSWORD_ACTION(this.props.user.username, new_password, old_password)
		}else{
			if(avatar){
				await this.props.UPDATE_USER_ACTION(this.props.user.username, username, email, dob, gender, avatar.base64)
			}else{
				console.log("in ")
				await this.props.UPDATE_USER_ACTION(this.props.user.username, username, email, dob, gender, null)
			}
		}
		this.setState({
			spinner: true
		})
		
	}

	render() {
		
		return (
			<div>
				<Button onClick={this.handleButtonClick} variant="outline-secondary" className="button">{this.props.title}</Button>
				{this.state.spinner ? <Loader
			        type="ThreeDots"
			        color="#00BFFF"
			        height={100}
			        width={100}
			        timeout={4000}
			        className="spinner"
			      />: null}
				<Modal 
					show={this.state.show} 
					onHide={this.handleClose}
					size="md"
      				aria-labelledby="contained-modal-title-vcenter"
      				centered


				>
			        <Modal.Header>
			          <Modal.Title>{this.props.title}</Modal.Title>
			        </Modal.Header>
			        <Modal.Body>
			        	{(this.props.update_password_errors && this.state.show_error) ? 
			    			Object.keys(this.props.update_password_errors).map((key) => <Alert variant="danger">{key}: {this.props.update_password_errors[key][0]}</Alert>): null
			    		}
			        	<Form onSubmit={this.handleSubmit}>
			        		{this.props.key_value === "password" ? 
			        			<div>
			        			<Form.Group className="mb-3" controlId="formBasicEmail">
								    <Form.Label className="input-title">Old Password</Form.Label>
								    <Form.Control type="text" name="old_password" onChange={this.handleChange}/>
								  </Form.Group>
								  <Form.Group className="mb-3" controlId="formBasicEmail">
								    <Form.Label className="input-title">New Password</Form.Label>
								    <Form.Control type={this.props.input_type} name="new_password" onChange={this.handleChange}/>
								  </Form.Group>
								  <Form.Group className="mb-3" controlId="formBasicEmail">
								    <Form.Label className="input-title">Confirm New Password</Form.Label>
								    <Form.Control type={this.props.input_type} name="confirm_new_password" onChange={this.handleChange}/>
								  </Form.Group>
								</div> :

								   <Form.Group className="mb-3" controlId="formBasicEmail">
								    <Form.Label className="input-title">{this.props.key_value}</Form.Label>
								    {this.props.key_value !== "avatar" ? 
								    	<Form.Control type={this.props.input_type} name={this.props.key_value} onChange={this.handleChange}/>
									: <FileBase64 type="file" multiple={false} onDone={(base64) => this.setState({avatar:base64})} />}
								    
								    
								  </Form.Group>
			        		}

						 	<Button variant="primary" onClick={this.handleSubmit}>
					            Save Changes
					          </Button>
						</Form>
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

const mapStateToProps = state => {
  return {
    user: state.auth_reducer.user,
    update_password: state.auth_reducer.update_password,
    update_password_errors: state.auth_reducer.update_password_errors,
  };
};

const mapDispatchToProps =  {
    UPDATE_USER_ACTION,
    USER_DETAIL_ACTION,
    UPDATE_PASSWORD_ACTION,
    MESSAGES_ACTION,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonComponent);


