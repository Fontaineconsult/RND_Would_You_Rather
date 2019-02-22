import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './UserQuestion'


class UnansweredQuestionsContainer extends Component {

    render(){

        return(
            <div>
                <div className="homeQuestionsTitle">Your Unanswered Questions</div>
                {this.props.unanswered.map(id => (<Question questions = {this.props.questions}
                                                            image={this.props.users[this.props.questions[id].author].avatarURL}
                                                            users={this.props.users} answered={id}/>))}

            </div>


        )

    }


}


function mapStateToProps({activeUser, users, questions}) {


    return {activeUser, users, questions}
}


export default connect(mapStateToProps)(UnansweredQuestionsContainer)