import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Question from './UserQuestion'


class AnsweredQuestionsContainer extends Component {

    render(){

        return(
            <div>
                <div className="homeQuestionsTitle">Your Answered Questions</div>
                {Object.keys(this.props.users[this.props.activeUser.activeUserId].answers).map(id => (
                    <Question answered = {id}
                              questions = {this.props.questions}
                              users={this.props.users}
                              image={this.props.users[this.props.questions[id].author].avatarURL} />
                ))}

            </div>


        )

    }


}

function mapStateToProps({activeUser, users, questions}) {

    return {activeUser, users, questions}

}

export default connect(mapStateToProps)(AnsweredQuestionsContainer)