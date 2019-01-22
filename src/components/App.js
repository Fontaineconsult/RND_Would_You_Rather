import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from "../actions/shared";
import MainContentContainer from "./MainContentContainer"
import TopMenu from "../components/dashboard/TopMenu"


class App extends Component {



    componentDidMount() {
        this.props.dispatch(handleInitialData())

    }

    render() {




        return(
            <div>

                <TopMenu/>
                <MainContentContainer/>


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