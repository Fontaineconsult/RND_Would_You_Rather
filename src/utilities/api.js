import {
    _saveQuestion,
    _saveQuestionAnswer,
    _getUsers,
    _getQuestions

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

