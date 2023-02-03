import React, { createContext, useReducer, useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const initialUser = {
    id: 0,
    nome: '',
    sobrenome: '',
    telefone: 0,
    email: '',
    state: 0,
}

export const ValidUsers = [
    {
        id: 1,
        nome: 'Eliude',
        sobrenome: 'Vemba',
        telefone: 933470417,
        email: 'sweeteliude@gmail.com',
        password: '1234',
        state: 0,
    },
    {
        id: 2,
        nome: 'Patrício',
        sobrenome: 'Carvalho',
        telefone: 912345678,
        email: 'pcuan@cc.com',
        password: '1234',
        state: 0,
    },
    {
        id: 3,
        nome: 'Hélio',
        sobrenome: 'UAN',
        telefone: 987654321,
        email: 'vembaeliude@gmailcom',
        password: '1234',
        state: 0,
    },
]

const UserContext = createContext(undefined)

const userReducer = (user, action) => {
    switch (action.type) {
        case 'setUser':
            return action.payload
        case 'clearUser':
            return initialUser
        case 'setState':
            return { ...user, state: action.payload }
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
        console.log(user)
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