import { formatQuestion } from '../utilities/_data'


export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";

export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions

    }

}

export function addQuestion (question) {
    console.log("question action", question)
    let formattedQuestion = formatQuestion( {optionOneText: question.optionOne, optionTwoText:question.optionTwo, author:question.activeUser} )



    console.log(formattedQuestion, "DSKLDSGLKDSGKH", [formattedQuestion.id])

    return {
        type: ADD_QUESTION,
        question: {[formattedQuestion.id]: formattedQuestion}

    }

}