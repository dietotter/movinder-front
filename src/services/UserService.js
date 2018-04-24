import Api from './Api'

export default {
    addUser (data) {
        return Api().post('users/new', data)
    },
    getUser (data) {
        return Api().post('users/get', data)
    },
    getAllUsers () {
        return Api().post('users/')
    },
    login (data) {
        return Api().post('users/login', data)
    }
}
