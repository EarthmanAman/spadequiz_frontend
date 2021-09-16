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
      const total = this.props.statistics.Total
      const month = this.props.statistics.month
    return (
    	<div className="league-desc">
    		<h5>{this.props.description}</h5>
    		<Row>
    			<LeagueCol title="Date_League_Formed" value={`${created_date.month},${created_date.day}, ${created_date.year} `} style_class="league-desc-col-border"/>
    			<LeagueCol title="League_Visits" value="135, 451" style_class="league-desc-col-border"/>
    			<LeagueCol title="Total:" value=""/>
    			<LeagueCol title="Games" value={total.games} />
    			<LeagueCol title="Tournaments" value={total.tournaments}/>
    			<LeagueCol title="Players" value={total.players} />
    			<LeagueCol title="Active_Players" value={total.active} style_class="league-desc-col-border"/>
    			<LeagueCol title="30_Days:" value="" />
    			<LeagueCol title="Games" value={month.games}/>
    			<LeagueCol title="Tournaments" value={month.tournaments} />
    			<LeagueCol title="New_Players" value={month.new_players}/>
    			
    		</Row>
    	</div>
    )
  }
}


export default LeagueDescComponent;
