import createReducer from '../../utils/createReducer'
import { success, fail, pending } from '../../utils/promiseHelper'
import { GET_ALL_INVITATIONS, ADD_INVITATION } from "../../redux/actionTypes"
import InvitationService from '../../services/InvitationService'

const initialState = {
    events: []
}

const getAllInvitations = () /* true or false */ => ({
    type: GET_ALL_INVITATIONS,
    payload: InvitationService.getAllInvitations()
})

const addInvitation = (data) => ({
    type: ADD_INVITATION,
    payload: InvitationService.addInvitation(data)
})

export const eventsReducer = createReducer(
    {
        [success(GET_ALL_INVITATIONS)]: (state, {data}) => {
            const { success, invitations } = data
            if (!success) {
                return {
                    ...state,
                    events: []
                }
            }

            return {
                ...state,
                events: invitations
            }
        }
    },
    initialState
)

export const actions = {
    getAllInvitations, addInvitation
}
