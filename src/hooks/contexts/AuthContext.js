import React from 'react'

export const AuthContext = React.createContext();
export const AuthProvider = (props) => {
    const [state, setState] = React.useState({
        isAuthenticated: false,
        username: '',
        email: '',
        userId: '',
        file:''
    })

    const deleteAndLogoutUser = () => {
        setState({
            ...state,
            isAuthenticated: false,
            username: '',
            email: '',
            userId: '',
            file: ''
        })
    }
    const updateProfilePicture = (profilePic) => {
        setState({
            ...state,
            file: profilePic
        })
    }
    const updateUser = (userData) => {
        setState({
            ...state,
            ...userData
        })
    }
    const logIn = (username, email, id,profilePic) => {
        setState({
            ...state, isAuthenticated: true,
            username: username,
            email: email,
            userId: id,
            file:profilePic
        })
    }
    return (
        <AuthContext.Provider value={{ state, logIn, deleteAndLogoutUser, updateUser, updateProfilePicture }}>
            {props.children}
        </AuthContext.Provider>
    )
}

