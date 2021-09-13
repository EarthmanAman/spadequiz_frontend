import {
	REGISTER_ERROR,
	REGISTER_SUCCESS,
	REGISTER_ERROR_REMOVE,

	LOGIN_ERROR,
	LOGIN_SUCCESS,
	LOGIN_ERROR_REMOVE,

	LOGOUT,

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

		default:
			return state
			break;
	}
}

export default AuthReducer