import createReducer from '../../utils/createReducer'
import { TOGGLE_STARTING_PAGE, SHOW_AUTH, HIDE_AUTH, CHANGE_AUTH_TYPE } from "../../redux/actionTypes";

const initialState = {
    showStartingPage: true,
    authType: 'sign up',
    authHidden: true
}

const toggleStartingPage = showStartingPage /* true or false */ => ({
    type: TOGGLE_STARTING_PAGE,
    payload: { showStartingPage }
})

const showAuth = () => ({
    type: SHOW_AUTH
})

const hideAuth = () => ({
    type: HIDE_AUTH
})

const changeAuthType = type /* true or false */ => ({
    type: CHANGE_AUTH_TYPE,
    payload: { type }
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
    toggleStartingPage,
    showAuth,
    hideAuth,
    changeAuthType
}
