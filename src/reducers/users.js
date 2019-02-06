import { RECEIVE_USERS } from "../actions/users";
import { ANSWER_QUESTION } from "../actions/users";
import { REGISTER_QUESTION } from "../actions/users";


export default function users (state = {}, action) {

    switch (action.type) {

        case RECEIVE_USERS :
            return {
                ...state,
                ...action.users
            };

        case ANSWER_QUESTION:

            const new_answers = state[action.user.activeUserId].answers;
            Object.assign(new_answers, {[action.question.id]: action.answer.checked});
            return {
                ...state,
                ...state[action.user.activeUserId].answers[new_answers]
            };


        case REGISTER_QUESTION:
            console.log("REGUSTE", action)
            return {
                ...state,
                [action.user]: {
                    ...state[action.user],
                    questions: state[action.user].questions.concat([action.questionID])


                }

            };



        default :
            return state

    }

}