import { combineReducers } from 'redux'

import userReducer from './user/user.reducer'

import { persistReducer } from 'redux-persist'
import sessionStorage from 'redux-persist/lib/storage/session' // optional
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
  	key: 'root',
	storage,
	whitelist: ['userData']
}

const rootReducer = combineReducers({
	userData: userReducer,
});

export default persistReducer(persistConfig, rootReducer);