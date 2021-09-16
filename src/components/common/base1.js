import React from 'react';
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css"
import {Container, Row, Col} from "react-bootstrap";
import Banner from "./banner"
import MainOne from "./main1"
import LeagueDesc from "./league_description/league_desc"
import '../../themes/base.css';
import '../../themes/side_nav.css';
import {
    MY_LEAGUE_ACTION,
    MY_LEAGUE_ANNOUNCEMENT_ACTION,
} from "../../store/actions/actions"

class BaseOneComponent extends React.Component {
    componentDidMount = async() => {
        await this.props.MY_LEAGUE_ACTION("spadequiz")
        await this.props.MY_LEAGUE_ANNOUNCEMENT_ACTION("spadequiz")
    }
  render() {
      const my_league = this.props.my_league
    return (
    	<div className="base1-main">
    		<div className="top">
    			<Banner src={my_league.banner}/>
    			<LeagueDesc description={my_league.description} created_date={my_league.created_date} statistics={this.props.my_league.statistics}/>
    		</div>
    	</div>
    )
  }
}


const mapStateToProps = state => {
  return {
    my_league: state.list_reducer.my_league,
    error: state.list_reducer.my_league_error,
  };
};

const mapDispatchToProps =  {
    MY_LEAGUE_ACTION,
    MY_LEAGUE_ANNOUNCEMENT_ACTION,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BaseOneComponent);



