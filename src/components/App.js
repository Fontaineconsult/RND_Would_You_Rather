import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from "../actions/shared";
import MainContentContainer from "./MainContentContainer"
import TopMenu from "../components/dashboard/TopMenu"
import { Route, Router } from 'react-router-dom'

class App extends Component {



    componentDidMount() {
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


function mapStateToProps( {users, questions, activeUser} ) {


    return {
        users,
        questions,
        activeUser

    }

}


export default connect(mapStateToProps)(App)