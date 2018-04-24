import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { startingPageReducer } from '../modules/StartingPage'

const rootReducer = combineReducers({
    routing: routerReducer,
    startingPageState: startingPageReducer
})

export default rootReducer
