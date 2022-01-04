import createReducer from './reducerUtils';

import produce from 'immer'

const initialState = {
   optionSetValues:{},
   
   programs:[]
}

const programFunc = {
   setProgram(state,action){
       state.programs=action.payload
   },
   setKategories(state,action){
      debugger
      state.optionSetValues[action.payload.key]=action.payload.value
  },
}

export default produce((state, action) => createReducer(state, action, programFunc), initialState);
