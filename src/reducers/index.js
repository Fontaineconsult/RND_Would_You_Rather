import { combineReducers } from 'redux'
import users from './users'
import questionsReducer from './questionsReducer'
import activeUser from './activeuser'
import browserHistory from './browserHistory'


export default combineReducers({

    users,
    questions: questionsReducer,
    activeUser,
    browser: browserHistory

})