import React from 'react';
import { MdHome, MdGridOn } from "react-icons/md";
import "bootstrap/dist/css/bootstrap.min.css"
import '../../../themes/side_nav.css';

class SideNavLinkComponent extends React.Component {
  render() {
    return (

          <a className={`item ${this.props.status}`}>
              <MdHome className="icon"/>
              <h4>HOME</h4>
          </a>
    )
  }
}


export default SideNavLinkComponent;
