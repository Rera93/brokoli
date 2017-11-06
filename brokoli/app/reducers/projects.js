import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const searchedProjects = createReducer({}, {

});

export const projectCount = createReducer(0, {
    //listen for transformations of ADD_PROJECT and modify the state accordingly
    [types.ADD_PROJECT](state, action){
        return state + 1;

    }
});