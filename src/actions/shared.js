import { getAllData, saveNewQuestion, saveAnswer } from "../utilities/api";
import { receiveUsers } from "../actions/users"
import { receiveQuestions} from "../actions/questions";
import { setActiveUser, logoutActiveUser } from "./activeuser";
import { addQuestion } from "./questions"
import { answerQuestion } from "../actions/users";
import { registerQuestion } from "../actions/users";


export function handleInitialData(){

    return (dispatch) => {
        getAllData().then(({users, questions }) => {

            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(questions));
        })

    }

}

export function dispatchActiveUser(activeUser) {

    return (dispatch) => {

        dispatch(setActiveUser(activeUser))

    }

}

export function dispatchNewQuestion(question) {

    return (dispatch) => {

        saveNewQuestion({optionOneText: question.optionOne, optionTwoText:question.optionTwo, author:question.activeUser})
            .then(function(question){

            dispatch(addQuestion(question));
            dispatch(registerQuestion(question))
        })
            .catch(() => {alert("Something went wrong when saving this question")})

    }

}

export function dispatchAnswer(question, answerino, user) {

    let authedUser = user.activeUserId;
    let qid = question.id;
    let answer = answerino.checked;

    saveAnswer({authedUser, qid, answer});

    return (dispatch) => {
        saveAnswer({authedUser, qid, answer}).then(function () {
            dispatch(answerQuestion(question, answer, user))
        }).catch(() => {alert("Couldn't Save Your Answer")});
    }

}


export function dispatchLogout( activeUser) {

    return (dispatch) => {

        dispatch(logoutActiveUser( activeUser ))

    }

}


