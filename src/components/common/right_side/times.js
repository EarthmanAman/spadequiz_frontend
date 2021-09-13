import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css"
import {Button} from "react-bootstrap"
import '../../../themes/right_side.css';

class RightSideButtonsComponent extends React.Component {
  render() {
    return (
    	<div>
    	<div className="right-side-times">
			<p>League Time:</p>
      		<Button variant="outline-secondary" className="time">04:00 am EDT</Button>
    	</div>

    	<div className="right-side-times">
			<p>My Time:</p>
      		<Button variant="outline-secondary" className="time">04:00 am EDT</Button>
    	</div>
    	</div>
    )
  }
}


export default RightSideButtonsComponent;
