import {
	MY_LEAGUE,
	MY_LEAGUE_ERROR,

	MY_LEAGUE_ANNOUNCEMENT,
	MY_LEAGUE_ANNOUNCEMENT_ERROR,
} from "../actions/action_types"

const merge = (prev, next) => Object.assign({}, prev, next)

const ListReducer = (state={}, action) => {
	
	switch (action.type) {

		case MY_LEAGUE:
			return merge(state, {my_league:action.payload})
			break;
		case MY_LEAGUE_ERROR:
			return merge(state, {my_league_error:action.payload})
			break;

		case MY_LEAGUE_ANNOUNCEMENT:
			return merge(state, {my_league_announcements:action.payload})
			break;
		case MY_LEAGUE_ANNOUNCEMENT_ERROR:
			return merge(state, {my_league_announcements_error:action.payload})
			break;

		default:
			return state
			break;
	}
}

export default ListReducer