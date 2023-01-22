import React, { createContext, useReducer, useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const initialUser = {
    id: 0,
    name: '',
    email: '',
    state: 0,
}

const UserContext = createContext(undefined)

const userReducer = (user, action) => {
    switch (action.type) {
        case 'setUser':
            return action.payload
        case 'clearUser':
            return initialUser
        case 'setState':
            return {...user, state: action.payload}
        default:
            return user
    }
}

export const UserProvider = (props) => {
    const { children } = props
    // if localStorage has user, get it
    const localUser = localStorage.getItem('userPDCAirlines2023')

    const [user, dispatch] = useReducer(userReducer, localUser ? JSON.parse(localUser) : initialUser)

    const [validUser, setValidUser] = useState(false)

    useEffect(() => {
        setValidUser(user === undefined || user === null || user.id === 0 || user.name === '' || user.email === '')
    }, [user])

    const value = { user, dispatch, validUser }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export const useUser = () => {
    const context = useContext(UserContext)

    if (!context) {
        throw new Error('useUser must be used within a UserProvider')
    }

    return context
}