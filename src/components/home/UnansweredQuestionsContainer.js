import React, { Component } from 'react'
import { connect } from 'react-redux'


function UnansweredQuestion(unanswered, questions) {

    return (
        <div>
            <span>{questions[unanswered].optionOne.text}</span>
            <span>{questions[unanswered].optionTwo.text}</span>
        </div>
    )
}



class UnansweredQuestionsContainer extends Component {

    render(){

        return(
            <div>
                UNANSWERED QUESTIONS
                {this.props.unanswered.map(id => (UnansweredQuestion(id, this.props.questions)))}
                <button>View Poll</button>
            </div>


        )

    }


}


function mapStateToProps({activeUser, users, questions}) {


    return {activeUser, users, questions}
}


export default connect(mapStateToProps)(UnansweredQuestionsContainer)