import { combineReducers } from 'redux'
import * as projectsReducer from './projects'

export default combineReducers(Object.assign(
    projectsReducer,
));