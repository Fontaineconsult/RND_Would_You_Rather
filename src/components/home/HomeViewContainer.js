import React, { Component } from 'react'
import { connect } from 'react-redux'
import AnsweredQuestionsContainer from "./AnsweredQuestionsContainer"
import UnansweredQuestionsContainer from "./UnansweredQuestionsContainer"



class HomeViewContainer extends Component {


    render () {
        return(
            <div>


                Home View
                {console.log("DAPARTSSS", this.props)}
                {Object.keys(this.props.activeUser).length > 0 && (
                    <div>
                    <AnsweredQuestionsContainer/>
                    <UnansweredQuestionsContainer unanswered={this.props.unansweredQuestions}/>
                    </div>
                )}


            </div>

            )

    }

}

function mapStateTopProps({ activeUser = null, users, questions }) {

    if ( Object.keys(activeUser).length > 0) {

        let unansweredQuestions = getUnansweredQuestions(Object.keys(questions), Object.keys(users[activeUser.activeUserId].answers));
        return { activeUser, users, questions, unansweredQuestions }
    }


    return { activeUser, users, questions }

}


function getUnansweredQuestions (allQuestions,answered) {
    return allQuestions.filter(o => !answered.find(o2 => o === o2))
}

export default connect(mapStateTopProps)(HomeViewContainer);