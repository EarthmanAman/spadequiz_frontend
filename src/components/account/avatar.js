import React from "react";
import {Button, Alert, Modal, Form} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import '../../themes/account.css';

class AvatarComponent extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			show:false
		}
	}

	render() {
		return (
			<div className="account-avatar-div">
				<img src={this.props.avatar} className="account-avatar"/>
			</div>
		)
	}
}

export default AvatarComponent