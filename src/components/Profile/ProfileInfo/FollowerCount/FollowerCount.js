import React from 'react'
import classes from './FollowerCount.module.css'
const FollowerCount = (props) => {
    return (<div className={classes.Follower}>
        <span>0 : Posts</span>
        <span>0 : Followers</span>
        <span>0 : Followimg</span>
    </div>)
}

export default FollowerCount