import createReducer from './reducerUtils';
import produce from 'immer'

const initialState = {
    id: null,   
}

const userFunc = {
    async setId(state, action) {
        state.id = action.payload;       
    },    
}

export default produce((state, action) => createReducer(state, action, userFunc), initialState);
