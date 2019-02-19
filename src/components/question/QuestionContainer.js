import React, { Component } from 'react'
import { connect } from 'react-redux'
import AnswerQuestion from "./AnswerQuestion"
import AnsweredQuestion from "./AnsweredQuestion"
import {withRouter} from "react-router";

class QuestionContainer extends Component {

    render () {
        console.log("OUTERCONTAINER", this.props)


        if (this.props.question === undefined) {
            return(<div>404 Question Not Found</div>)

        } else {
            return(

                <div>
                    <b>Would you Rather</b>
                    {this.props.isAnswered && (
                        <AnsweredQuestion question_id = {this.props.question}/>

                    )}

                    {!this.props.isAnswered && (
                        <AnswerQuestion question_id = {this.props.question} />


                    )}

                </div>

            )



        }



    }

}


function mapStateToProps({ questions, activeUser, users }, { match }){
    console.log("MATCH", match)
    const question_id = match.params.id || { question_id: null };
    const isAnswered = question_id in users[activeUser.activeUserId].answers;



    console.log("question_id", question_id)
    console.log("IS ANSWERED", isAnswered)



    return {
        question: null ? null : questions[question_id],
        questions,
        activeUser,
        users,
        isAnswered

    }
}




export default withRouter(connect(mapStateToProps)(QuestionContainer));