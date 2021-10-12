export function toolsReducer(state = {tools: [], marked: []}, action) {

    switch (action.type){
        case "GET_TOOLS":
            return{...state, tools: action.payload}

        case "UPDATE_TOOL":
            const cheese =  state.tools.filter(tool => tool.id !== action.payload.id)
            const whiz = {...state, tools: cheese, marked: action.payload}
            return whiz

        case "DELETE_TOOL":
            const deleted =  state.tools.filter(tool => tool.id !== action.payload)        
            return{...state, tools: deleted}    
            
        default:
            return state
    }
}

