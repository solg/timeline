
import { combineReducers, applyMiddleware, createStore, compose } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

//Import reducers
import userReducer from '../reducers/user-reducer'
import timelineReducer from '../reducers/timeline-reducer'

//Apply middleware to redux store
const middleware = applyMiddleware(thunk); //logger()

const reducers = combineReducers({
  user: userReducer,
  timeline: timelineReducer
});

let createStoreWithMiddleware = compose( middleware )( createStore );
const store = createStoreWithMiddleware(reducers);

export default store;
