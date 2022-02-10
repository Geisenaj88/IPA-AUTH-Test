import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import persistReducer from './rootReducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const middlewares = [thunk, logger]

const store = createStore(
	persistReducer,
	{},
	applyMiddleware(...middlewares)
)

const persistor = persistStore(store)

export { store, persistor };