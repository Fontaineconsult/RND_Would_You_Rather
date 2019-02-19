import React, { Component } from 'react'
import { connect } from 'react-redux'
import {dispatchCurrentRoute, handleInitialData} from "../actions/shared";
import MainContentContainer from "./MainContentContainer"
import TopMenu from "../components/dashboard/TopMenu"
import { Route, Router } from 'react-router-dom'
import {withRouter} from "react-router";
import { createBrowserHistory } from 'history';


class App extends Component {


    componentDidMount() {
        this.props.dispatch(dispatchCurrentRoute(window.location.pathname))
        this.props.dispatch(handleInitialData())

    }

    render() {




        return(
            <div className="AppContainer">

                <TopMenu/>

                <Route component={MainContentContainer}/>


            </div>

        )


    }

}


function mapStateToProps( {users, questions, activeUser}) {


    return {
        users,
        questions,
        activeUser

    }

}


export default withRouter(connect(mapStateToProps)(App))