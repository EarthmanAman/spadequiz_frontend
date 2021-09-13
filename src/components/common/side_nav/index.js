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
import { Link, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import '../../../themes/side_nav.css';

class SideNavComponent extends React.Component {

  handleAdminClick = () => {
    window.open("http://127.0.0.1:8000/admin/");
  }

  render() {
    return (
    	<div className="side-main">


            <Link to="/" className="item active">
                <MdHome className="icon"/>
                <h4>HOME</h4>
            </Link>

             <a className="item">
                <MdGridOn className="icon"/>
                <h4>LEAGUE STATISTICS</h4>
            </a>

            <a className="item">
                <MdThumbDown className="icon"/>
                <h4>REPORT LOSS</h4>
            </a>

            <a className="item">
                <MdEventSeat className="icon"/>
                <h4>TOURNAMENTS</h4>
            </a>

            <a className="item">
                <MdGrade className="icon"/>
                <h4>HALL OF FAME</h4>
            </a>

            <a className="item">
                <MdPerson className="icon"/>
                <h4>MY ACCOUNTS</h4>
            </a>

            <a className="item">
                <MdAccountBalance className="icon"/>
                <h4>RULES</h4>
            </a>

            <a className="item">
                <MdFiberNew className="icon"/>
                <h4>NEWS</h4>
            </a>

            <a className="item">
                <MdLibraryBooks className="icon"/>
                <h4>LEAGUE ROASTER</h4>
            </a>

            <button className="item" onClick={this.handleAdminClick}>
                <MdLibraryBooks className="icon"/>
                <h4>ADMIN</h4>
            </button>
    	</div>
    )
  }
}


export default SideNavComponent;
