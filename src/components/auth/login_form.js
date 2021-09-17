import React from 'react';
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import {Button, Form, Alert} from "react-bootstrap"
import '../../themes/register.css';
import {LOGIN_USER, MESSAGES_ACTION, USER_DETAIL_ACTION, MY_TOURNAMENTS_ACTION} from "../../store/actions/actions"

class LoginComponent extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			username:null,
			password:null,
			next: false,
			show_error: true,
			spinner: false
		}
	}

	componentWillReceiveProps = async(next_props) => {
  		
  		if(next_props.error === null && next_props.token !== undefined && next_props.token !== null){
  			await this.props.USER_DETAIL_ACTION(this.state.username)
  			await this.props.MY_TOURNAMENTS_ACTION(this.state.username)
  			this.props.MESSAGES_ACTION({"variant":"success", "message":"Logged in successfully"})
  			await this.setState({show_error:false, next:true})
  		}
  	}
	handleChange = e => {
	    this.setState({ [e.target.name]: e.target.value, show_error:false });
	};

	handle_submit = async(e) => {
		e.preventDefault()
		const {username, password} = this.state

		this.setState({show_error:true, spinner:true})
    	await this.props.LOGIN_USER(username, password)
	}

	componentDidMount(){
		this.setState({next:false})
		console.log(this.props.token)
	}
  render() {
  	if(this.state.next) {
  		return <Redirect to="/" />
  	}
    return (
    	<div className="register-main">
    		<h3>Enter your Details to Login</h3>
    		<Loader
		        type="ThreeDots"
		        color="#00BFFF"
		        height={100}
		        width={100}
		        timeout={4000} //3 secs
		        visible={this.state.spinner}
		        className="spinner"
		      />
    		<Form onSubmit={this.handle_submit}>
	    		{(this.props.error && this.state.show_error) ? 
	    			Object.keys(this.props.error).map((key) => <Alert variant="danger">{key}: {this.props.error[key][0]}</Alert>): null
	    		}
				<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
				    <Form.Label className="label">Username</Form.Label>
				    <Form.Control type="text" placeholder="spade123" name="username" onChange={this.handleChange}/>
				</Form.Group>

				  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
				    <Form.Label className="label">Password</Form.Label>
				    <Form.Control type="Password" name="password" onChange={this.handleChange}/>
				  </Form.Group> 		
			  
			  <Button 
			  	type="submit" 
			  	variant="secondary"
			  	>LOGIN</Button>
			</Form>

			
    	</div>
    	
    )
  }
}


const mapStateToProps = state => {
  return {
    token: state.auth_reducer.token,
    error: (state.auth_reducer.login_error ? state.auth_reducer.login_error: null),
  };
};

const mapDispatchToProps =  {
    LOGIN_USER,
    MESSAGES_ACTION,
    USER_DETAIL_ACTION,
    MY_TOURNAMENTS_ACTION,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);

