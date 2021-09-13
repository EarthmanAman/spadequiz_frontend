import React from 'react';
import logo from '../../assets/sebanner.png'; // with import
import '../../themes/base.css';
class BannerComponent extends React.Component {
  render() {
    return (
    	<div>
    		<img src={this.props.src} />
    	</div>
    )
  }
}

export default BannerComponent