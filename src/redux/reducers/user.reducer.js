import createReducer from './reducerUtils';

import produce from 'immer'
import UserService from '../../services/User.service';

const initialState = {
    id: 102,
   
}

const userFunc = {
    async setId(state, action) {
        state.id = action.payload;
       
    },
    
}

export default produce((state, action) => createReducer(state, action, userFunc), initialState);
