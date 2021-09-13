import {combineReducers} from "redux";

import AuthReducer from "./auth_reducer";
import CommonReducer from "./common_reducer";
import ListReducer from "./list_reducer";

export default combineReducers({
	auth_reducer:AuthReducer,
	common_reducer:CommonReducer,
	list_reducer:ListReducer,
})
