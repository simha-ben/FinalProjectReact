import createReducer from './reducerUtils';

import produce from 'immer'

const initialState = {
   optionSetValues: { Age: [], SumOfParticipants: [], Subject: [], Migdar : [],Type: [], Language: [], },
   programs: []
}

const programFunc = {
   setProgram(state, action) {
      state.programs = action.payload
   },
   setKategories(state, action) {
      
      state.optionSetValues[action.payload.key] = action.payload.value
   },
}

export default produce((state, action) => createReducer(state, action, programFunc), initialState);
