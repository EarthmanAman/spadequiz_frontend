import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css"
import '../../../themes/right_side.css';

class RightSideAdminsComponent extends React.Component {
  render() {
    return (
    	<div className="right-side-admins">
          <h5>League Staffs</h5>
          <table>
            <thead>
              <tr>
                <th>Head Admin</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="last">SpadeQuiz</td>
              </tr>
            </tbody>
          </table>
    	</div>
    )
  }
}


export default RightSideAdminsComponent;
