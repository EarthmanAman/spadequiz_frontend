import React from "react"
import {Container, Button} from "react-bootstrap"
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css"
import BaseTwo from "../common/base2"
import MainTwo from "../common/main2"
import '../../themes/tournament.css';
import {
	USER_DETAIL_ACTION,
} from "../../store/actions/actions"



class HelperComponent extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			
		}
	}



	render(){
		
		return (
			<div className="rules-main">
				<div className="rules-buttons">
					<Button variant="outline-secondary" className="button">Overview</Button>
					<Button variant="outline-secondary" className="button">Tournament Specific</Button>
				</div>
				<div className="rules-content">
					<div className="rule">
						<p>Hello heree</p>
					</div>
					
				</div>
			</div>
		)
	}
}

class RulesMainComponent extends React.Component {
	componentDidMount = async() => {
	}

	render() {
		console.log(this.props.my_tournaments)
		return (
			<div className="main">
				<BaseTwo />
				<MainTwo content={<HelperComponent />}/>
			</div>
		)
	}
}

const mapStateToProps = state => {
  return {
    my_league: state.list_reducer.my_league,
    my_tournaments: (state.list_reducer.my_tournaments) ? state.list_reducer.my_tournaments: [],
    user: state.auth_reducer.user,
  };
};

const mapDispatchToProps =  {
    USER_DETAIL_ACTION,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RulesMainComponent);


