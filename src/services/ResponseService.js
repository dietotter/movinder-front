import Api from './Api'

export default {
    reply (data) {
        return Api().post('responds/reply', data)
    },
    confirm (data) {
        return Api().post('responds/confirm', data)
    }
}
