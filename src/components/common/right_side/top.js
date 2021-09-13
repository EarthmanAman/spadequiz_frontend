import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css"
import '../../../themes/right_side.css';

import Buttons from "./buttons"
import Times from "./times"

class RightSideTopComponent extends React.Component {
  render() {
    return (
    	<div className="right-side-top">
          <Buttons />
          <Times />
    	</div>
    )
  }
}


export default RightSideTopComponent;
