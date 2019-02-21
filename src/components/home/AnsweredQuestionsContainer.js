import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function AnsweredQuestion(props) {

    let tempImgSize = {
        height: 30,
        width: 30

    };
    let link = "/question/" + props.answered
    return (
        <div className="questionSelection">

            <div className="questionSelectionLeft">

                <div className="questionSelectionLeftImage"><img alt="avatar" src={props.image} style={tempImgSize}/></div>
                <div className="questionSelectionLeftContent">
                    <div className="questionToSelect">{props.questions[props.answered].optionOne.text}</div>
                    <div>or</div>
                    <div className="questionToSelect">{props.questions[props.answered].optionTwo.text}</div>
                </div>

            </div>
            <div className="questionSelectionRight">
                <Link to={{pathname: link}}>View Poll</Link>
            </div>

        </div>
    )
}




class AnsweredQuestionsContainer extends Component {

    render(){

        return(
            <div>
                <div className="homeQuestionsTitle">Your Answered Questions</div>
                {Object.keys(this.props.users[this.props.activeUser.activeUserId].answers).map(id => (
                    <AnsweredQuestion answered = {id} questions = {this.props.questions} image={'asd'} />
                ))}

            </div>


        )

    }


}

function mapStateToProps({activeUser, users, questions}) {

    return {activeUser, users, questions}

}

export default connect(mapStateToProps)(AnsweredQuestionsContainer)