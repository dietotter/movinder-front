import createReducer from '../../utils/createReducer'
import { success, fail, pending } from '../../utils/promiseHelper'
import { GET_ALL_INVITATIONS } from "../../redux/actionTypes";

const initialState = {
    events: []
}

const getAllInvitations = () /* true or false */ => ({
    type: GET_ALL_INVITATIONS
})

export const eventsReducer = createReducer(
    {
        [GET_ALL_INVITATIONS]: (state, { invitations }) => ({
            ...state,
            events: invitations
        })
    },
    initialState
)

export const actions = {
    getAllInvitations
}
