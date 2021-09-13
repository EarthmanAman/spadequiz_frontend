import React from "react"
import '../../themes/home.css';

class TitleComponent extends React.Component {
	render() {
		return (
			<div className="title">
				<h5>{this.props.title}</h5>
			</div>
		)
	}
}

export default TitleComponent;