import React from 'react';
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css"
import {Container, Row} from "react-bootstrap";
import LeagueCol from "./league_info"
import LeagueColLong from "./league_info_long"
import '../../../themes/base.css';

class LeagueDescComponent extends React.Component {
  render() {
      const created_date = this.props.created_date
    return (
    	<div className="league-desc">
    		<h5>{this.props.description}</h5>
    		<Row>
    			<LeagueCol title="Date_League_Formed" value={`${created_date.month},${created_date.day}, ${created_date.year} `} style_class="league-desc-col-border"/>
    			<LeagueCol title="League_Visits" value="135, 451" style_class="league-desc-col-border"/>
    			<LeagueCol title="Total:" value=""/>
    			<LeagueCol title="Games" value="3611" />
    			<LeagueCol title="Tournaments" value="251"/>
    			<LeagueCol title="Players" value="456" />
    			<LeagueCol title="Active_Players" value="292" style_class="league-desc-col-border"/>
    			<LeagueCol title="30_Days:" value="" />
    			<LeagueCol title="Games" value="420"/>
    			<LeagueCol title="Tournaments" value="18" />
    			<LeagueCol title="New_Players" value="22"/>
    			
    		</Row>
    	</div>
    )
  }
}


export default LeagueDescComponent;
