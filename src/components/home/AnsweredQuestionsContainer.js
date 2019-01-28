import React, { Component } from 'react'
import { connect } from 'react-redux'


function AnsweredQuestion(props) {

    return (
        <div>
            <span>{props.questions[props.answered].optionOne.text}</span>
            <span>{props.questions[props.answered].optionTwo.text}</span>
        </div>
    )
}




class AnsweredQuestionsContainer extends Component {

    render(){

        return(
            <div>
                ANSWERED QUESTIONS
                {Object.keys(this.props.users[this.props.activeUser.activeUserId].answers).map(id => (
                    <AnsweredQuestion answered = {id} questions = {this.props.questions} />
                ))}
                <button>View Poll</button>
            </div>


        )

    }


}

function mapStateToProps({activeUser, users, questions}) {

    return {activeUser, users, questions}

}

export default connect(mapStateToProps)(AnsweredQuestionsContainer)