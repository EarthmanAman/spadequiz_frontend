import {createStore, applyMiddleware} from "redux";
import { persistStore, persistReducer } from "redux-persist"
import thunk from "redux-thunk";
import reducer from "./reducers/main_reducer"
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: "root",
	storage:storage
}

const persistedReducer = persistReducer(persistConfig, reducer)

export const store =  createStore(persistedReducer, applyMiddleware(thunk))
export const persistor =  persistStore(store)