import createReducer from '../../utils/createReducer'
import { success, fail, pending } from '../../utils/promiseHelper'
import {
    CHANGE_AUTH_TYPE, HIDE_AUTH, SHOW_AUTH
} from "../../redux/actionTypes"


const initialState = {
    authType: 'signup',
    authHidden: false
}

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

export const authReducer = createReducer(
    {
        [SHOW_AUTH]: (state) => ({
            ...state,
            authHidden: false
        }),
        [HIDE_AUTH]: (state) => ({
            ...state,
            authHidden: true
        }),
        [CHANGE_AUTH_TYPE]: (state, { type }) => ({
            ...state,
            authType: type
        })
    },
    initialState
)

export const actions = {
    showAuth,
    hideAuth,
    changeAuthType
}
