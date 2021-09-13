import React from 'react';

import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css"
import {Container, Row, Col, Alert} from "react-bootstrap";
import Banner from "./banner"
import SideNav from "./side_nav/index"
import RightSide from "./right_side/index"
import LeagueDesc from "./league_description/league_desc"

import Register from "../auth/register"
import Login from "../auth/login"

import '../../themes/main1.css';
import {MESSAGES_ACTION} from "../../store/actions/actions"

class MainOneComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            message_visible:false
        }
    }

    onShowAlert = ()=>{
        if(this.props.message !== null){
            this.setState({message_visible:true},()=>{
              window.setTimeout(()=>{
                this.setState({message_visible:false})
                this.props.MESSAGES_ACTION(null)
              },3000)
            });
        }
    }

    componentWillReceiveProps(next_props){
        this.onShowAlert()
    }

    componentDidMount(){
       this.onShowAlert()
    }

  render() {
    return (
    	<div className="main-div">
            <div className="left-side-div">
    		    <SideNav />
            </div>
            <div className="main-content-div">
                {(this.state.message_visible && this.props.message !== null) ? <div style={{"margin-right":40, "margin-left":40,}}><Alert variant={this.props.message.variant}>{this.props.message.message}</Alert></div>: null}
                {this.props.content}
                
            </div>
            <div className="right-side-div">
                <RightSide />
            </div>
    	</div>
    )
  }
}


const mapStateToProps = state => {
  return {
    message: state.common_reducer.message,
  };
};

const mapDispatchToProps =  {
    MESSAGES_ACTION
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainOneComponent);


