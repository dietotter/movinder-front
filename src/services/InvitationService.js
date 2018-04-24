import Api from './Api'

export default {
    addInvitation (data) {
        return Api().post('invitations/new', data)
    },
    getInvitation (data) {
        return Api().post('invitations/get', data)
    },
    getAllInvitations () {
        return Api().post('invitations/', )
    }
}
