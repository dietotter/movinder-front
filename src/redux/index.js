import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { sessionRootReducer } from './sessionState'
import { startingPageReducer } from '../modules/StartingPage'
import { eventsReducer } from '../modules/Events'
import { authReducer } from '../modules/Authorization'

const rootReducer = combineReducers({
    routing: routerReducer,
    startingPageState: startingPageReducer,
    eventsState: eventsReducer,
    session: sessionRootReducer,
    authState: authReducer
})

export default rootReducer
