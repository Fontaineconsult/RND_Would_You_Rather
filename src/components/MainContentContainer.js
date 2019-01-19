import React, { Component } from 'react'
import HomeViewContainer from "./home/HomeViewContainer"
import LeaderBoardContainer from "./leaderboard/LeaderBoardContainer"
import LoginContainer from "./login/LoginContainer"
import NewQuestionContainer from "./newquestion/NewQuestionContainer"
import QuestionContainer from "./question/QuestionContainer"




class MainContentContainer extends Component {


    render() {

        return(
            <div>
                MainContentView
                <HomeViewContainer/>
                <LeaderBoardContainer/>
                <LoginContainer/>
                <NewQuestionContainer/>
                <QuestionContainer/>

            </div>

        )

    }

}

export default MainContentContainer;