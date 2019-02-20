import React, { Component } from 'react'
import HomeViewContainer from "./home/HomeViewContainer"
import LeaderBoardContainer from "./leaderboard/LeaderBoardContainer"
import LoginContainer from "./login/LoginContainer"
import NewQuestionContainer from "./newquestion/NewQuestionContainer"
import QuestionContainer from "./question/QuestionContainer"
import LogoutContainer from "./login/logout"
import { dispatchCurrentRoute } from "../actions/shared"
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'


class MainContentContainer extends Component {




    render() {
        console.log("EHHDJHGDG", this.props.location.state)
        return(
            <div className="mainContentContainer">
                MainContentView

                <Switch>
                    <Route exact path='/' render={() => (!this.props.loggedIn ? (<Redirect push to="/login"/>):(<HomeViewContainer/>))}/>
                    <Route exact path='/leaderboard' render={() => (!this.props.loggedIn ? (<Redirect to={{pathname:"/login", state:{ from: this.props.location}}}/>):(<LeaderBoardContainer/>))}/>
                    <Route path='/login' render={() => (this.props.loggedIn ? (<Redirect  to="/logout"/>):(<LoginContainer/>))}/>
                    <Route exact path='/add' render={() => (!this.props.loggedIn ? (<Redirect to={{pathname:"/login", state:{ from: this.props.location}}}/>):(<NewQuestionContainer/>))}/>
                    <Route exact path="/question/:id" render={() => (!this.props.loggedIn ? (<Redirect to={{pathname:"/login", state:{ from: this.props.location}}}/>):(<QuestionContainer/>))}/>
                    <Route path="/logout" render={() => (!this.props.loggedIn ? (<Redirect to="/login"/>):(<LogoutContainer/>))}  />
                    <Redirect from="*" push to="/login"/>
                </Switch>
            </div>

        )

    }

}


function mapStateToProps( {activeUser }) {
    let loggedIn = Object.keys(activeUser).length > 0;
    return {loggedIn}
}


export default withRouter(connect(mapStateToProps)(MainContentContainer));

