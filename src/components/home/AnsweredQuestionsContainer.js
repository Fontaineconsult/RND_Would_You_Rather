import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function AnsweredQuestion(props) {
    let link = "/question/" + props.answered
    return (
        <div>
            <span>{props.questions[props.answered].optionOne.text}</span>
            <span>{props.questions[props.answered].optionTwo.text}</span>
            <Link to={{pathname: link}}>View Poll</Link>
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

            </div>


        )

    }


}

function mapStateToProps({activeUser, users, questions}) {

    return {activeUser, users, questions}

}

export default connect(mapStateToProps)(AnsweredQuestionsContainer)