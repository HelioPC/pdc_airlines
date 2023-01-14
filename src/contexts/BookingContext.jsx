import React, { createContext, useContext, useReducer } from 'react'
import PropTypes from 'prop-types'

const initialData = {
    currentStep: 0,
    name: '',
}

// Context
const BookingContext = createContext(undefined)

const bookingReducer = (state, action) => {
    console.log(state, action)

    switch(action.type) {
        case 'setCurrentStep':
            return {...state, currentStep: action.payload}
        case 'setName':
            return {...state, name: action.payload}
        default:
            return state
    }
}

bookingReducer.propTypes = {
    state: PropTypes.objectOf(
        PropTypes.shape({
            currentStep: PropTypes.number.isRequired,
            name: PropTypes.string,
        }),
    ),
    action: PropTypes.objectOf(
        PropTypes.shape({
            type: PropTypes.oneOf([
                'setCurrentStep',
                'setName',
            ]),
            payload: PropTypes.any.isRequired,
        }),
    ),
}

// Provider
export const BookingProvider = (props) => {
    const { children } = props
    const [state, dispatch] = useReducer(bookingReducer, initialData)
    const value = { state, dispatch }
    return (
        <BookingContext.Provider value={value} >
            {children}
        </BookingContext.Provider>
    )
}

BookingProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

// Context Hook
export const useBooking = () => {
    const context = useContext(BookingContext)

    if(context === undefined) {
        throw new Error('useBooking precisa ser usado dentro do BookingProvider')
    }

    return context
}