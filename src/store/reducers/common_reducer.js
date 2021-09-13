import {
	MESSAGES

} from "../actions/action_types"

const merge = (prev, next) => Object.assign({}, prev, next)

const CommonReducer = (state={}, action) => {
	
	switch (action.type) {

		// REGISTRATION
		case MESSAGES:
			return merge(state, {message:action.payload})
			break;

		default:
			return state
			break;
	}
}

export default CommonReducer