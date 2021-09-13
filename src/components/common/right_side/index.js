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
import "bootstrap/dist/css/bootstrap.min.css"
import '../../../themes/right_side.css';
import Top from "./top"
import News from "./news"
import Admins from "./admins"

class SideNavComponent extends React.Component {
  render() {
    return (
    	<div className="right-side-main">
          <Top />
          <News />
          <Admins />
    	</div>
    )
  }
}


export default SideNavComponent;
