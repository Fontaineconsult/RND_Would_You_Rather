export const RECEIVE_USERS = "RECEIVE_USERS"


export function receiveUsers(users) {
    console.log("ACTION USERS", users)
    return {
        type: RECEIVE_USERS,
        users


    }

}