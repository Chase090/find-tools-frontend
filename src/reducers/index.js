import { combineReducers } from 'redux'

import { toolsReducer } from './ToolsReducer'
import { categoryReducer } from './CategoryReducer'

const rootReducer = combineReducers({
    tools: toolsReducer, 
    cats: categoryReducer
})

export default rootReducer


