export const success = (action) => {
    return `${action}_FULFILLED`
}

export const fail = (action) => {
    return `${action}_REJECTED`
}

export const pending = (action) => {
    return `${action}_PENDING`
}
