import React from 'react'
import classes from './FollowerCount.module.css'
import { AuthContext } from '../../../../hooks/contexts/AuthContext'
const FollowerCount = (props) => {
    const { state } = React.useContext(AuthContext)
    return (<div className={classes.Follower}>
        <span><strong>{state.noOfPosts ? state.noOfPosts : '0'}: Posts</strong></span>
        <span><strong>0 : Followers</strong></span>
        <span><strong>0 : Followimg</strong></span>
    </div>)
}

export default FollowerCount