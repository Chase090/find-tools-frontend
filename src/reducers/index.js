import { combineReducers } from 'redux'

import { toolsReducer } from './ToolsReducer'
import { categoryReducer } from './categoryReducer'

const rootReducer = combineReducers({
    tools: toolsReducer, 
    cats: categoryReducer
})

export default rootReducer


