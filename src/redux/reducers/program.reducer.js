import createReducer from './reducerUtils';

import produce from 'immer'

const initialState = {
   program:[]
   
  
}

const programFunc = {
   setProgram(state,action){
       state.program=action.payload
   },
//    setSelectedUser(state,action){
//     state.selectedUser=action.payload
// },
//    addUser(state,action){
//        state.user.push(action.payload)
//    }
}

export default produce((state, action) => createReducer(state, action, programFunc), initialState);
