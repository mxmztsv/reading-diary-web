import {createContext} from 'react'

function noop() {}

export const AuthContext = createContext({
    token: null,
    name: null,
    surname: null,
    middleName: null,
    userId: null,
    login: noop,
    logout: noop,
    isAuthenticated: false
})
