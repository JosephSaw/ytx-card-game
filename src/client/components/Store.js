import React, { createContext, useReducer } from 'react'

const initialState = {
    account: null,
	setupComplete: false,
    socket: null,
    error: '',
    success: '',
    ytxBet: 0,
    redirect: null,
}
const store = createContext(initialState)
const { Provider } = store

const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        let newState
        switch (action.type) {
            case 'SET_YTX_BET':
                console.log('set bet')
                newState = {
                    ...state,
                    ytxBet: action.payload.ytxBet,
                }
                return newState
            case 'SET_SUCCESS':
                console.log('set success')
                newState = {
                    ...state,
                    success: action.payload.success,
                }
                return newState
            case 'SET_ERROR':
                console.log('set error')
                newState = {
                    ...state,
                    error: action.payload.error,
                }
                return newState
            case 'SET_SOCKET':
                console.log('set socket')
                newState = {
                    ...state,
                    socket: action.payload.socket,
                }
                return newState
            case 'SET_SETUP_COMPLETE':
                console.log('set setup complete')
                newState = {
                    ...state,
                    setupComplete: action.payload.setupComplete,
                }
                return newState
            case 'SET_ACCOUNT':
                console.log('set account')
                newState = {
                    ...state,
                    account: action.payload.account,
                }
                return newState
            default:
                console.log('default state')
                return _state
        }
    }, initialState)
    return (
        <Provider value={{ state, dispatch }}>
            { children }
        </Provider>
    )
}

export { store, StateProvider }