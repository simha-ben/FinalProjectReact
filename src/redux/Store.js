import {createStore,combineReducers} from 'redux';

import ProgramReducer from './reducers/program.reducer';
import{applyMiddleware} from 'redux'
import {getProgramFromServer} from './middlewares/crud'


const reducer=combineReducers({ProgramReducer})
const store=createStore(reducer,applyMiddleware(getProgramFromServer));
store.dispatch({type:'SET_PROGRAMS_FROM_SERVERR'})

window.store=store;
export default store;