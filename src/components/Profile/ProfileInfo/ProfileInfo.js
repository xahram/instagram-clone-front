import React from 'react'
import Username from './Username/Username'
import FollowerCount from './FollowerCount/FollowerCount'
import classes from './ProfileInfo.module.css'
import Bio from './Bio/Bio'
import { AuthContext } from '../../../hooks/contexts/AuthContext'
const ProfileInfo = (props) => {
    const { state } = React.useContext(AuthContext)
    return (<div className={classes.ProfileInfo}>
        <Username history={props.history} username={state.username} />
        <FollowerCount />
        <Bio />
    </div>)
}

export default ProfileInfo