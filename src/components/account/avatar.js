import React from "react";
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
				<img src={this.props.avatar} className="account-avatar" alt="avatar"/>
			</div>
		)
	}
}

export default AvatarComponent