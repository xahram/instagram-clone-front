import React from 'react'

export const AuthContext = React.createContext();
export const AuthProvider = (props) => {
    const [state, setState] = React.useState({
        isAuthenticated: true,
        username: '',
        email: '',
        userId: ''
    })

    const deleteAndLogoutUser = () => {
        setState({
            ...state,
            isAuthenticated: false,
            username: '',
            email: '',
            userId: ''
        })
    }
    const updateUser = (userData) => {
        setState({
            ...state,
            ...userData
        })
    }
    const logIn = (username, email, id) => {
        setState({
            ...state, isAuthenticated: true,
            username: username,
            email: email,
            userId: id
        })
    }
    return (
        <AuthContext.Provider value={{ state, logIn, deleteAndLogoutUser, updateUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}

