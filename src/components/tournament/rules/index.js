import React from "react";
import {connect} from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css"
import '../../../themes/tournament.css';

import {Button} from "react-bootstrap"


class RulesComponent extends React.Component {
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

export default RulesComponent