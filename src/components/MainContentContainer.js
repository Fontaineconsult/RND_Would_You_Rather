import React, { Component } from 'react'
import HomeViewContainer from "./home/HomeViewContainer"
import LeaderBoardContainer from "./leaderboard/LeaderBoardContainer"
import LoginContainer from "./login/LoginContainer"
import NewQuestionContainer from "./newquestion/NewQuestionContainer"
import QuestionContainer from "./question/QuestionContainer"
import { BrowserRouter as Router, Route } from 'react-router-dom'



class MainContentContainer extends Component {


    render() {

        return(
            <div>
                MainContentView
                <Route exact path='/' component={HomeViewContainer}/>
                <Route exact path='/' component={LeaderBoardContainer}/>
                <Route exact path='/' component={LoginContainer}/>
                <Route exact path='/' component={NewQuestionContainer}/>
                <Route path="/question/:id" component={QuestionContainer}/>

            </div>

        )

    }

}

export default MainContentContainer;