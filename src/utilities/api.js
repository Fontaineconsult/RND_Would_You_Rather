import {
    _saveQuestion,
    _saveQuestionAnswer,
    _getUsers,
    _getQuestions,
    questions
} from './_data.js'


export function getAllData() {
    return Promise.all([
        _getUsers(),
        _getQuestions(),
    ]).then(([users, questions]) => ({
        users,
        questions
    }))

}

export function saveNewQuestion(question){


    return _saveQuestion(question).then(function (result) {return result})

}

export function saveAnswer(answer) {
    return _saveQuestionAnswer(answer).then(function (result) {return result})
}