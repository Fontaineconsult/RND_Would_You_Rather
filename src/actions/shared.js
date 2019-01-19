import { getAllData } from "../utilities/api";
import { receiveUsers } from "../actions/users"
import { receiveQuestions} from "../actions/questions";


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