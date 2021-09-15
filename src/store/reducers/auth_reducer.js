import {
	REGISTER_ERROR,
	REGISTER_SUCCESS,
	REGISTER_ERROR_REMOVE,

	LOGIN_ERROR,
	LOGIN_SUCCESS,
	LOGIN_ERROR_REMOVE,

	LOGOUT,
	USER_DETAIL,
	UPDATE_USER_SUCCESS,
	UPDATE_USER_ERROR,

	UPDATE_PASSWORD_SUCCESS,
	UPDATE_PASSWORD_ERROR,

} from "../actions/action_types"

const merge = (prev, next) => Object.assign({}, prev, next)

const AuthReducer = (state={}, action) => {
	
	switch (action.type) {

		// REGISTRATION
		case REGISTER_SUCCESS:
			return merge(state, {user:action.payload, registration_error:null, token:null, login_error:null})
			break;

		case REGISTER_ERROR:
			
			return merge(state, {registration_error:action.payload})
			break;
		case REGISTER_ERROR_REMOVE:
			
			return merge(state, {registration_rrror:action.payload})
			break;

		case LOGIN_SUCCESS:
			return merge(state, {token:action.payload, login_error:null})
			break;

		case LOGIN_ERROR:
			
			return merge(state, {login_error:action.payload})
			break;
		case LOGIN_ERROR_REMOVE:
			
			return merge(state, {login_rrror:action.payload})
			break;

		case LOGOUT:
			
			return merge(state, {user:action.payload, token:action.payload, registration_error:action.payload, login_error:action.payload})
			break;

		case USER_DETAIL:
			
			return merge(state, {user:action.payload})
			break;
		case UPDATE_USER_SUCCESS:
			
			return merge(state, {user:action.payload, update_password_errors:null})
			break;

		case UPDATE_USER_ERROR:
			
			return merge(state, {update_password_errors:action.payload})
			break;

		case UPDATE_PASSWORD_SUCCESS:
			
			return merge(state, {update_password:action.payload, update_password_errors:null})
			break;

		case UPDATE_PASSWORD_ERROR:
			
			return merge(state, {update_password_errors:action.payload})
			break;

		default:
			return state
			break;
	}
}

export default AuthReducer