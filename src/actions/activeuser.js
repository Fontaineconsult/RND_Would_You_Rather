export const SET_ACTIVE_USER = "SET_ACTIVE_USER"
export const LOGOUT_ACTIVE_USER = "LOGOUT_ACTIVE_USER"

export function setActiveUser(activeUser) {

    return {
        type: SET_ACTIVE_USER,
        activeUser


    }

}

export function logoutActiveUser(activeUser) {


    return {
        type: LOGOUT_ACTIVE_USER,
        activeUser

    }
}