import { combineReducers } from 'redux'
import users from './users'
import questions from './questions'
import activeUser from './activeuser'

export default combineReducers({
    users,
    questions,
    activeUser

})