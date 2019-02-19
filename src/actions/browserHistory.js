export const PUSH_CURRENT_ROUTE  = "PUSH_CURRENT_ROUTE"


export function setBrowserHistory(currentRoute) {
    console.log("BROWENSER SET", currentRoute)
    return {
        type: PUSH_CURRENT_ROUTE,
        currentRoute


    }

}