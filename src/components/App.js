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



        console.log("DAAA PROPPSSS", this.props)
        return(
            <div>

                <TopMenu/>
                <MainContentContainer/>


            </div>

        )


    }

}


function mapStateToProps( {users, questions} ) {

    console.log("THAA STATEE", users, questions)
    return {
        users,
        questions

    }

}


export default connect(mapStateToProps)(App)