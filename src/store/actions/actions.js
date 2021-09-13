import {login, register} from "../apis/auth"
import {my_league, my_league_announcements} from "../apis/list"

import {
	REGISTER_SUCCESS,
	REGISTER_ERROR,
	REGISTER_ERROR_REMOVE,

	LOGIN_SUCCESS,
	LOGIN_ERROR,
	LOGIN_ERROR_REMOVE,

	LOGOUT,

	MESSAGES,

	MY_LEAGUE,
	MY_LEAGUE_ERROR,

	MY_LEAGUE_ANNOUNCEMENT,
	MY_LEAGUE_ANNOUNCEMENT_ERROR,

} from "./action_types"

// Registration ACTIONS

export const LOGIN_USER = (username, password) =>async dispatch => {
	let token;
	
	await login(username, password).then(data => {
		
		if(data.refresh == undefined){
			if(data.detail){
				dispatch({type:LOGIN_ERROR, payload:{"Failed Login":[data.detail,]}})
			}else{
				dispatch({type:LOGIN_ERROR, payload:data})
			}
			
		}else{
	 		dispatch({type:LOGIN_SUCCESS, payload:data})
	 	}
	  })

	 .catch(error => {
	 	dispatch({type:LOGIN_ERROR, payload:null})
	 })
}

export const REGISTER_USER = (username, email, dob, password,  confirm_password, avatar) =>async dispatch => {
	let token;
	
	await register(username, email, dob, password,  confirm_password, avatar).then(data => {
		
		if(data.status_code !== 201){

			dispatch({type:REGISTER_ERROR, payload:data})
		}else{
	 		dispatch({type:REGISTER_SUCCESS, payload:data})
	 	}
	  })

	 .catch(error => {
	 	dispatch({type:REGISTER_ERROR, payload:null})
	 })
}	

export const REGISTRATION_ERROR_REMOV = () => dispatch => {
	dispatch({type:REGISTER_ERROR_REMOVE, payload:null})
}

export const LOGOUT_ACTION = () => dispatch => {
	dispatch({type:LOGOUT, payload:null})
}

export const MESSAGES_ACTION = (payload) => dispatch => {
	dispatch({type:MESSAGES, payload:payload})
}


export const MY_LEAGUE_ACTION = (slug) =>async dispatch => {
	
	await my_league(slug).then(data => {
		
		
	 	dispatch({type:MY_LEAGUE, payload:data})
	 	
	  })

	 .catch(error => {
	 	dispatch({type:MY_LEAGUE_ERROR, payload:error})
	 })
}

export const MY_LEAGUE_ANNOUNCEMENT_ACTION = (slug) =>async dispatch => {
	
	await my_league_announcements(slug).then(data => {
		
		
	 	dispatch({type:MY_LEAGUE_ANNOUNCEMENT, payload:data})
	 	
	  })

	 .catch(error => {
	 	dispatch({type:MY_LEAGUE_ANNOUNCEMENT_ERROR, payload:error})
	 })
}