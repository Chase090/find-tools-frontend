export function toolsReducer(state = {tools: []}, action) {

    switch (action.type){
        case "GET_TOOLS":
            return{...state, tools: action.payload}
        default:
            return state
    }
}