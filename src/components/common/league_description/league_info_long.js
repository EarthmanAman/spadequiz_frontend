import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {Container, Col, Row} from "react-bootstrap";

class LeagueInfoLongComponent extends React.Component {
  render() {
    return (
    	<Col>
    		<Row>
    			<Col>
    				<h6>Total</h6>
    			</Col>
    			<Col>
    				<h6>Games</h6>
    			</Col>
    			<Col>
    				<h6>Tournaments</h6>
    			</Col>
    			<Col>
    				<h6>Players</h6>
    			</Col>
    			<Col>
    				<h6>Active Players</h6>
    			</Col>
    		</Row>
    	</Col>
    )
  }
}


export default LeagueInfoLongComponent;
