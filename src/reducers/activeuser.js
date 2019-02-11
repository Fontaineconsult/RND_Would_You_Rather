import { SET_ACTIVE_USER, LOGOUT_ACTIVE_USER  } from "../actions/activeuser";

export default function activeUser (state = {}, action) {

    switch (action.type) {

        case SET_ACTIVE_USER :
            console.log("SET AVTICE USER", action.type, action.activeUser)
            return {
                activeUserName: action.activeUser.selectedUserName,
                activeUserId: action.activeUser.selectedUserId
            };

        case LOGOUT_ACTIVE_USER:

            return {
                    ...state = {}
            };


        default :
            return state

    }

}