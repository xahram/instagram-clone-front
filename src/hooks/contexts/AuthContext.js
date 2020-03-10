import React from 'react'

export const AuthContext = React.createContext();
export const AuthProvider = (props) => {
    const [state, setState] = React.useState({ isAuthenticated: false })


    const logIn = () => {
        setState({ ...state, isAuthenticated: !state.isAuthenticated })
    }
    return (
        <AuthContext.Provider value={{ state, logIn }}>
            {props.children}
        </AuthContext.Provider>
    )
}

