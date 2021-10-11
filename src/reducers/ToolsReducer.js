export function toolsReducer(state = {tools: []}, action) {

    switch (action.type){
        case "GET_TOOLS":
            return{...state, tools: action.payload}

        case "DELETE_TOOL":
            const cheese =  state.tools.filter(tool => tool.id !== action.payload.id)        
            return cheese

        default:
            return state
    }
}