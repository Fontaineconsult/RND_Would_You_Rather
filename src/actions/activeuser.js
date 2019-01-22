export const SET_ACTIVE_USER = "SET_ACTIVE_USER"


export function setActiveUser(activeUser) {
    console.log("ACTION USERS", activeUser)
    return {
        type: SET_ACTIVE_USER,
        activeUser


    }

}