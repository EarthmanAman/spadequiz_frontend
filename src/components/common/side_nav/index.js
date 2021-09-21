import React from 'react';
import { 
  MdHome, 
  MdGridOn, 
  MdThumbDown, 
  MdPerson, 
  MdAccountBalance,
  MdEventSeat,
  MdGrade,
  MdLibraryBooks,
  MdFiberNew

} from "react-icons/md";
import {Modal, Button} from "react-bootstrap"
import {connect} from "react-redux"
import { Link, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import '../../../themes/side_nav.css';

class SideNavComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      show:false,
      message: "",
    }
  }
  handleAdminClick = () => {
    window.open("https://spadequizapi.herokuapp.com/admin/");
  }

  handleClose = () => {
    this.setState({
      show: false,
    })
  }
  render() {
    console.log(this.props.token)
    return (
    	<div className="side-main">
            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header>
                <Modal.Title>Login Required</Modal.Title>
              </Modal.Header>
              <Modal.Body>{this.state.message}</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>

            <Link to="/spadequiz" className="item active">
                <MdHome className="icon"/>
                <h4>HOME</h4>
            </Link>

             <a className="item">
                <MdGridOn className="icon"/>
                <h4>LEAGUE STATISTICS</h4>
            </a>
            {(this.props.token !== null && this.props.token !== undefined) ?
            <Link to="/report" className="item">
                <MdThumbDown className="icon"/>
                <h4>REPORT LOSS</h4>
            </Link>:
              <a onClick={() => this.setState({show:true, message:"You must be logged in to report a match."})} className="item">
                <MdThumbDown className="icon"/>
                <h4>REPORT LOSS</h4>
            </a>
            }

            <Link to="/tournament" className="item">
                <MdEventSeat className="icon"/>
                <h4>TOURNAMENTS</h4>
            </Link>

            {/*<a className="item">
                <MdGrade className="icon"/>
                <h4>HALL OF FAME</h4>
            </a> */}

            {(this.props.token !== null && this.props.token !== undefined) ?
            <Link to="/account"  className="item">
                <MdPerson className="icon"/>
                <h4>MY ACCOUNTS</h4>
            </Link>: 
            <a onClick={() => this.setState({show:true, message:"You must be logged in to view my account"})} className="item">
                <MdPerson className="icon"/>
                <h4>MY ACCOUNTS</h4>
            </a>
          }

            <Link to="/rules" className="item">
                <MdAccountBalance className="icon"/>
                <h4>RULES</h4>
            </Link>

            <Link to="/news" className="item">
                <MdFiberNew className="icon"/>
                <h4>NEWS</h4>
            </Link>

            <a className="item">
                <MdLibraryBooks className="icon"/>
                <h4>LEAGUE ROASTER</h4>
            </a>

            <button className="item" onClick={this.handleAdminClick}>
                <MdLibraryBooks className="icon"/>
                <h4>ADMIN PORTAL</h4>
            </button>
    	</div>
    )
  }
}



const mapStateToProps = state => {
  return {
    token: state.auth_reducer.token,
  };
};

const mapDispatchToProps =  {
    
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideNavComponent);

