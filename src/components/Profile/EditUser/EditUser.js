import React from 'react'
import { AuthContext } from '../../../hooks/contexts/AuthContext'
import UserInfo from '../UserInfo/UserInfo'
import { List } from '@material-ui/core'
const EditUser = (props) => {
    const { state } = React.useContext(AuthContext)
    return (
        <List>
            <UserInfo state={state} />
        </List>
    )
}

export default EditUser