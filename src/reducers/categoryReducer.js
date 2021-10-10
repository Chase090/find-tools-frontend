export function categoryReducer(state = {cats: []}, action) {

    switch (action.type){
        case "GOT_CATS":
            return{...state, cats: action.payload}
        default:
            return state
    }
}