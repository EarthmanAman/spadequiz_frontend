import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css"
import {Button} from "react-bootstrap"
import '../../../themes/right_side.css';
import {Link, Redirect} from "react-router-dom";
import { connect } from "react-redux";

import {LOGOUT_ACTION, MESSAGES_ACTION} from "../../../store/actions/actions"

class RightSideButtonsComponent extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			next:false
		}
	}

	handleLogout = e => {
		e.preventDefault()
		this.props.LOGOUT_ACTION()
		this.props.MESSAGES_ACTION({"variant":"success", "message":"Logged out successful"})
		this.setState({next:true})
	}

	componentDidMount(){
		this.setState({next:false})
	}
  render() {
  	
    return (
    	<div>{this.state.next ? <Redirect to="/" />:null},</div>,
    	<div className="right-side-buttons">
    	  {this.props.token ? 
    	  	<Button onClick={this.handleLogout} variant="outline-secondary" className="login">Logout</Button>:
    	  	<Link to="/login"><Button variant="outline-secondary" className="login">Login</Button></Link>
    	  }
          
          
          <Link to="/register"><Button variant="outline-secondary">Register</Button></Link>
    	</div>
    )
  }
}



const mapStateToProps = state => {
  return {
    token: state.auth_reducer.token,
  };
};

const mapDispatchToProps =  {
	LOGOUT_ACTION,
	MESSAGES_ACTION,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RightSideButtonsComponent);
