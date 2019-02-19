import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux'
import  logger  from './logger'
import  getbrowserhistory from './browserHistory'

export default applyMiddleware(
    thunk,
    logger,


)