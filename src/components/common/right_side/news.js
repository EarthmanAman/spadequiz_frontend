import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css"
import '../../../themes/right_side.css';

import Buttons from "./buttons"
import Times from "./times"

class RightSideNewsComponent extends React.Component {
  render() {
    return (
    	<div className="right-side-news">
          <h5>League News</h5>
          <div className="new">
          	<p><span>@eliteboot</span> joined the league</p>
          </div>
          <div className="new">
          	<p><span>@eliteboot</span> joined the league</p>
          </div>
          <div className="new">
          	<p><span>@eliteboot</span> joined the league</p>
          </div>
    	</div>
    )
  }
}


export default RightSideNewsComponent;
