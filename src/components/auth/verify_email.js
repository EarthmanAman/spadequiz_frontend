import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import {Alert, Container} from "react-bootstrap"

import BaseOne from "../common/base1"
import MainOne from "../common/main1"
import '../../themes/home.css';

class AlertItem extends React.Component{
	render(){
		return (
			<div style={{"margin":30}}>
				<Alert variant="info">We have sent an activation Email. Please verify your email before the admin approve you.</Alert>
			</div>
			
		)
	}
	
}


class EmailVerifyComponent extends React.Component {
	render() {
		return (
			<Container fluid className="main">
				<BaseOne />
				<MainOne content={<AlertItem />}/>
			</Container>
		)
	}
}

export default EmailVerifyComponent