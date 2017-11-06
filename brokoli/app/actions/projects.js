import * as types from './types'

//Action Creators 

export function fetchProjects(ingredients) {
    return (dispatch, getState) => {
        console.log(getState())
    }
}

export function addProject() {
    return {
        type: types.ADD_PROJECT,
    }
}