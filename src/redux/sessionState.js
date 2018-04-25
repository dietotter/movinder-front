import UserService from '../services/UserService'
import { success, fail, pending } from '../utils/promiseHelper'
import { LOG_IN, SIGN_OUT, SIGN_UP } from "./actionTypes"

const initialState = {
    isLoggedIn: false,
    user: {},
    message: '',
    isPending: false
}

export const signUp = (data) => ({
    type: SIGN_UP,
    payload: UserService.addUser(data)
})

export const logIn = (data) => ({
    type: LOG_IN,
    payload: UserService.login(data)
})

export const signOut = () => ({
  type: SIGN_OUT
})

const sessionReducers = {
    [pending(LOG_IN)]: (state) => ({
        ...state,
        isPending: true
    }),
    [fail(LOG_IN)]: (state, {data}) => ({
        ...state,
        message: 'Error',
        isPending: false
    }),
    [success(LOG_IN)]: (state, {data}) => {
        const { success, ...rest } = data
        if (!success) {
            return {
                ...state,
                message: rest.error,
                isPending: false
            }
        }

        return {
            ...state,
            isLoggedIn: true,
            user: rest,
            isPending: false
        }
    },
    [pending(SIGN_UP)]: (state) => ({
        ...state,
        isPending: true
    }),
    [fail(SIGN_UP)]: (state, {data}) => ({
        ...state,
        message: 'Error',
        isPending: false
    }),
    [success(SIGN_UP)]: (state, {data}) => {
        const { success, ...rest } = data
        if (!success) {
            return {
                ...state,
                message: rest.error,
                isPending: false
            }
        }

        return {
            ...state,
            isLoggedIn: true,
            user: rest,
            isPending: false
        }
    },
    [SIGN_OUT]: state => {
        return {
            ...state,
            isLoggedIn: false,
            user: {}
        }
    }
}

export const actions = {
    signUp, logIn, signOut
}

export const sessionRootReducer = (state = initialState, action) => {
  let reducer = sessionReducers[action.type]
  return reducer ? reducer(state, action.payload) : state
}
