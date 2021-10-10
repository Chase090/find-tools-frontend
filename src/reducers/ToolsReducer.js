export function toolsReducer(state = {tools: []}, action) {

    switch (action.type){
        case "GOT_TOOLS":
            return{...state, cats: action.payload}
        default:
            return state
    }
}