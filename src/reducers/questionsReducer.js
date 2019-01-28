import {RECEIVE_QUESTIONS } from "../actions/questions";
import {ADD_QUESTION} from "../actions/questions";

export default function questionsReducer (state = {}, action) {

    switch (action.type){

        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            };

        case ADD_QUESTION:
            console.log("REAached Reducer", action)
            return {
                ...state,
                ...action.question,
            };

        default:
            return state

    }



}