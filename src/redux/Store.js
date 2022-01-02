import {createStore,combineReducers} from 'redux';
import ProgramReducer from './reducers/program.reducer';
import UserReducer from './reducers/user.reducer';
import{applyMiddleware} from 'redux'
import {getProgramFromServer} from './middlewares/crud'


const reducer=combineReducers({ProgramReducer,UserReducer})
const store=createStore(reducer,applyMiddleware(getProgramFromServer));
store.dispatch({type:'SET_PROGRAMS_FROM_SERVER'},{type:'GET_KATEGORIES_FROM_SERVER'})
// store.dispatch({type:'GET_KATEGORIES_FROM_SERVER'})
//,type:'GET_KATEGORIES_FROM_SERVER' איך מוסיפים את זה ??????????????????

window.store=store;
export default store;