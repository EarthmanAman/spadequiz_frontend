import React from "react";

import ButtonComponent from "./button"
import '../../themes/account.css';

class ButtonsComponent extends React.Component {
	render() {
		return (
			<div>
				<h4 className="button-title">My options</h4>
				<div>
					<ButtonComponent title={"Edit Username"} key_value={"username"} input_type={"text"}/>
					<ButtonComponent title={"Edit Password"} key_value={"password"} input_type={"password"}/>
					<ButtonComponent title={"Edit Email"} key_value={"email"} input_type={"email"}/>
					<ButtonComponent title={"Edit Avatar"} key_value={"avatar"} input_type={"file"}/>
					<ButtonComponent title={"Edit Birthday"} key_value={"dob"} input_type={"date"}/>
					<ButtonComponent title={"Edit Gender"} key_value={"gender"} input_type={"text"}/>
				</div>
			</div>
		)
	}
}

export default ButtonsComponent