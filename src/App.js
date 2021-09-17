import React from "react";
import './themes/account.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Loader from "react-loader-spinner";

import {
	MY_LEAGUE_ACTION,
	MESSAGES_ACTION,
} from "./store/actions/actions"
import Navigation from "./routes/index"

class App extends React.Component{
	componentDidMount(){
		
		MY_LEAGUE_ACTION("spadequiz")
		MESSAGES_ACTION(null)
	}
	render(){
		return (
			<Loader
			        type="ThreeDots"
			        color="#00BFFF"
			        height={100}
			        width={100}
			        timeout={5000}
			        
			        className="spinner"
			      />,
			<Navigation />
		)
	}
}

export default App