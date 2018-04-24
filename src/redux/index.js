import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { startingPageReducer } from '../modules/StartingPage'
import { eventsReducer } from '../modules/Events'

const rootReducer = combineReducers({
    routing: routerReducer,
    startingPageState: startingPageReducer,
    eventsState: eventsReducer
})

export default rootReducer
