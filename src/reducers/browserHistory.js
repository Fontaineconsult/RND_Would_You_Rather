import {PUSH_CURRENT_ROUTE} from '../actions/browserHistory'




export default function browserHistory (state = [], action) {
    switch (action.type) {

        case PUSH_CURRENT_ROUTE:


            return [
                ...state.concat(action.currentRoute)

            ];

        default:

            return state

    }
}