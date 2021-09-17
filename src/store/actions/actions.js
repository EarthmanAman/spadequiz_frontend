import {login, register} from "../apis/auth"
import {my_league, my_league_announcements} from "../apis/list"
import {
	user_detail, 
	update_user, 
	update_password, 
	my_tournaments,
	confirm_partnership
} from "../apis/detail"

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

	USER_DETAIL,
	UPDATE_USER_SUCCESS,
	UPDATE_USER_ERROR,
	UPDATE_USER_ERROR_REMOVE,

	UPDATE_PASSWORD_SUCCESS,
	UPDATE_PASSWORD_ERROR,
	UPDATE_PASSWORD_ERROR_REMOVE,

	MY_TOURNAMENTS,
	MY_TOURNAMENTS_ERRORS,

	CONFIRMED_PARTNERSHIP

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


export const USER_DETAIL_ACTION = (username) =>async dispatch => {
	
	await user_detail(username).then(data => {
		
		
	 	dispatch({type:USER_DETAIL, payload:data})
	 	
	  })

	 .catch(error => {
	 	console.log(error)
	 })
}

export const UPDATE_USER_ACTION = (user, username, email, dob, gender, avatar) =>async dispatch => {
	console.log("update action")
	await update_user(user, username, email, dob, gender, avatar).then(data => {
		if(data.username == undefined || data.username == null){
			dispatch({type:UPDATE_USER_ERROR, payload:data})
		}
		else{
			dispatch({type:UPDATE_USER_SUCCESS, payload:data})
		}
	 	
	  })

	 .catch(error => {
	 	console.log(error)
	 })
}

export const UPDATE_PASSWORD_ACTION = (username, new_password, old_password) =>async dispatch => {
	
	await update_password(username, new_password, old_password).then(data => {
		
		if(data.code === 200){
			dispatch({type:UPDATE_PASSWORD_SUCCESS, payload:data})
		}else{

			dispatch({type:UPDATE_PASSWORD_ERROR, payload:data.errors})
		}
	 	
	 	
	  })

	 .catch(error => {
	 	console.log(error)
	 })
}


export const MY_TOURNAMENTS_ACTION = (username) =>async dispatch => {
	
	await my_tournaments(username).then(data => {
		
		
	 	dispatch({type:MY_TOURNAMENTS, payload:data})
	 	
	  })

	 .catch(error => {
	 	console.log(error)
	 })
}

export const CONFIRMED_PARTNERSHIP_ACTION = (id, confirmed) =>async dispatch => {
	console.log("confirm")
	await confirm_partnership(id, confirmed).then(data => {
		
		
	 	dispatch({type:CONFIRMED_PARTNERSHIP, payload:data})
	 	
	  })

	 .catch(error => {
	 	console.log(error)
	 })
}