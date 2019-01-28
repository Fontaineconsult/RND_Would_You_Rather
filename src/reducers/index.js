import { combineReducers } from 'redux'
import users from './users'
import questionsReducer from './questionsReducer'
import activeUser from './activeuser'

export default combineReducers({
    users,
    questions: questionsReducer,
    activeUser

})