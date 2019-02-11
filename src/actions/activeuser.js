export const SET_ACTIVE_USER = "SET_ACTIVE_USER"
export const LOGOUT_ACTIVE_USER = "LOGOUT_ACTIVE_USER"

export function setActiveUser(activeUser) {
    console.log("ACTION USERS", activeUser)
    return {
        type: SET_ACTIVE_USER,
        activeUser


    }

}

export function logoutActiveUser(activeUser) {
    console.log("LOGGING OUT USER", activeUser)




    return {
        type: LOGOUT_ACTIVE_USER,
        activeUser

    }
}