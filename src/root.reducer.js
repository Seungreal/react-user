import {combineReducers} from 'redux'
import {userReducer} from './uss/modules'

export const rootReducer = combineReducers({
    userReducer
})

export default rootReducer