import { _saveQuestion } from '../utilities/_data'


export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";

export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions

    }

}

export function addQuestion (formattedQuestion) {

    _saveQuestion(formattedQuestion)

    return {
        type: ADD_QUESTION,
        question: {[formattedQuestion.id]: formattedQuestion}

    }

}


