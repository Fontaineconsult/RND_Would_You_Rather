import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from "react-router-dom";


function UnansweredQuestion(props) {
    let link = "/question/" + props.question_id
    let user = props.users[props.questions[props.question_id].author].name
    console.log("PRROOPPPSS", props)

    return (
        <div className="questionSelection">
            <div className="questionSelectionLeft">
                <div>{user} asks:</div>
                <div className="questionToSelect">{props.questions[props.question_id].optionOne.text}</div>
                <div>or</div>
                <div className="questionToSelect">{props.questions[props.question_id].optionTwo.text}</div>
            </div>
            <div className="questionSelectionRight">
                <Link to={{pathname: link}}>View Poll</Link>

            </div>

        </div>
    )
}



class UnansweredQuestionsContainer extends Component {

    render(){

        return(
            <div>
                <div className="homeQuestionsTitle">Your Unanswered Questions</div>
                {this.props.unanswered.map(id => (<UnansweredQuestion questions = {this.props.questions} users={this.props.users} question_id={id}/>))}

            </div>


        )

    }


}


function mapStateToProps({activeUser, users, questions}) {


    return {activeUser, users, questions}
}


export default connect(mapStateToProps)(UnansweredQuestionsContainer)