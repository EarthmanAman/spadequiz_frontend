import React from "react"
import {Container} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import BaseOne from "../common/base1"
import MainOne from "../common/main1"
import '../../themes/home.css';
import LoginForm from "./login_form"

class LoginComponent extends React.Component {
	render() {
		return (
			<Container fluid className="main">
				<BaseOne />
				<MainOne content={<LoginForm />}/>
			</Container>
		)
	}
}

export default LoginComponent;