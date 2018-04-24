import createReducer from '../../utils/createReducer'
import { TOGGLE_STARTING_PAGE } from "../../redux/actionTypes";

const initialState = {
    showStartingPage: true
}

const toggleStartingPage = showStartingPage /* true or false */ => ({
    type: TOGGLE_STARTING_PAGE,
    payload: { showStartingPage }
})

export const startingPageReducer = createReducer(
    {
        [TOGGLE_STARTING_PAGE]: (state, { showStartingPage }) => ({
            ...state,
            showStartingPage
        })
    },
    initialState
)

export const actions = {
    toggleStartingPage
}
