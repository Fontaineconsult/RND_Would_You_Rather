import { getAllData } from "../utilities/api";
import { receiveUsers } from "../actions/users"
import { receiveQuestions} from "../actions/questions";
import { setActiveUser } from "./activeuser";
import { addQuestion } from "./questions"
import { answerQuestion } from "../actions/users";
import { registerQuestion } from "../actions/users";
import {formatQuestion} from "../utilities/_data";

export function handleInitialData(){

    return (dispatch) => {
        getAllData().then(({users, questions }) => {

            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            console.log(users, questions)
        })

    }

}

export function dispatchActiveUser(activeUser) {

    return (dispatch) => {

        dispatch(setActiveUser(activeUser))

    }

}

export function dispatchNewQuestion(question) {
    let formattedQuestion = formatQuestion( {optionOneText: question.optionOne, optionTwoText:question.optionTwo, author:question.activeUser} )
    return (dispatch) => {


        dispatch(addQuestion(formattedQuestion));
        dispatch(registerQuestion(formattedQuestion))

    }

}


export function dispatchAnswer(question, answer, user) {

    return (dispatch) => {

        dispatch(answerQuestion(question, answer, user))

    }




}