import React from 'react'
import classes from './Post.module.css'
const Post = (props) => {
    return (
        <img alt='Posts' className={classes.Post} src={`data:image/jpg;base64,${props.url}`} />
    )
}

export default Post