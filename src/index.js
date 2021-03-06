import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

const store = createStore(reducer, middleware)

ReactDOM.render(<Provider store={store}><Router><Route component={App} /></Router></Provider>, document.getElementById('root'))