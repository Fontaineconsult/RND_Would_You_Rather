import { getAllData } from "../utilities/api";
import { receiveUsers } from "../actions/users"
import { receiveQuestions} from "../actions/questions";
import { setActiveUser } from "./activeuser";

export function handleInitialData(){

    return (dispatch) => {
        getAllData().then(({users, questions }) => {
            console.log("USERS ACTION", receiveUsers(users))
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            console.log(users, questions)
        })

    }

}

export function dispatchActiveUser(activeUser) {
    console.log("DISPATCH ACTIVE USER ", activeUser)
    return (dispatch) => {

        dispatch(setActiveUser(activeUser))

    }



}