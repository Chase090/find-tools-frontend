export function toolsReducer(state = {tools: []}, action) {

    switch (action.type){
        case "GET_TOOLS":
            return{...state, tools: action.payload}
        case "UPDATE_TOOL":
            debugger
        default:
            return state
    }
}