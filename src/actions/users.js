
import { _saveQuestionAnswer } from '../utilities/_data'


export const RECEIVE_USERS = "RECEIVE_USERS"
export const ANSWER_QUESTION = "ANSWER_QUESTION"
export const REGISTER_QUESTION = "REGISTER_QUESTION"


export function receiveUsers(users) {
    console.log("ACTION USERS", users)
    return {
        type: RECEIVE_USERS,
        users


    }

}

export function answerQuestion (question, answer, user ) {

    return {
        type: ANSWER_QUESTION,
        question,
        answer,
        user,

    }

}

export function registerQuestion(formattedQuestion) {

    return {
        type: REGISTER_QUESTION,
        questionID: formattedQuestion.id,
        user: formattedQuestion.author,

    }


}