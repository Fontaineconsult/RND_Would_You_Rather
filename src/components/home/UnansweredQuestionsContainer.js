import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from "react-router-dom";


function UnansweredQuestion(props) {
    let link = "/question/" + props.question_id
    return (
        <div>
            <span>{props.questions[props.question_id].optionOne.text}</span>
            <span>{props.questions[props.question_id].optionTwo.text}</span>
            <Link to={{pathname: link}}>View Poll</Link>
        </div>
    )
}



class UnansweredQuestionsContainer extends Component {

    render(){

        return(
            <div>
                UNANSWERED QUESTIONS
                {this.props.unanswered.map(id => (<UnansweredQuestion questions = {this.props.questions} question_id={id}/>))}

            </div>


        )

    }


}


function mapStateToProps({activeUser, users, questions}) {


    return {activeUser, users, questions}
}


export default connect(mapStateToProps)(UnansweredQuestionsContainer)