import React from 'react'
import classes from './Post.module.css'
const Post = (props) => {
    return (
        <div className={classes.Post}>
            <img alt='Post'  src={`data:image/jpg;base64,${props.url}`} />
        </div>
    )
}

export default Post