import { SET_ACTIVE_USER  } from "../actions/activeuser";


export default function activeUser (state = {}, action) {

    switch (action.type) {

        case SET_ACTIVE_USER :
            console.log("SET AVTICE USER", action.type, action.activeUser)
            return {
                ...state,
                activeUserName: action.activeUser.selectedUserName,
                activeUserId: action.activeUser.selectedUserId
            };


        default :
            return state

    }

}