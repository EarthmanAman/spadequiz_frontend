import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {Container, Col} from "react-bootstrap";
import '../../../themes/base.css';
class LeagueInfoComponent extends React.Component {
  render() {
    return (
    	<Col className={this.props.style_class}>
    		<h6>{this.props.title}</h6>
    		<p>{this.props.value}</p>
    	</Col>
    )
  }
}


export default LeagueInfoComponent;
