import React from "react"
import {Container} from "react-bootstrap"
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css"
import BaseTwo from "../common/base2"
import MainTwo from "../common/main2"
import '../../themes/account.css';

import {
	USER_DETAIL_ACTION,
} from "../../store/actions/actions"

import ButtonsComponent from "./buttons"
import AvatarComponent from "./avatar"
import PersonalInfoComponent from "./personal_info"
import GamesStatComponent from "./games_stat"

class HelperComponent extends React.Component {
	render(){
		return (
			<div className="account-content">
				<div className="buttons">
					<ButtonsComponent user={this.props.user}/>
				</div>
				<div className="info">
					{(this.props.user !== undefined && this.props.user !== null) ?
					<div className="" align="center">
						<AvatarComponent avatar={this.props.user.avatar}/>
						<PersonalInfoComponent user={this.props.user}/>
						<GamesStatComponent user={this.props.user}/>

					</div>: null
					}
				</div>
			</div>
		)
	}
}

class AccountComponent extends React.Component {
	componentDidMount = async() => {
		if(this.props.user !== undefined){
			console.log(this.props.user.username)
		}
	}

	render() {
	
		return (
			<div className="main">
				<BaseTwo />
				<MainTwo content={<HelperComponent user={this.props.user}/>}/>
			</div>
		)
	}
}

const mapStateToProps = state => {
  return {
    user: state.auth_reducer.user,
  };
};

const mapDispatchToProps =  {
    USER_DETAIL_ACTION,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountComponent);


