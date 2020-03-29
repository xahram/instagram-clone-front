import React from 'react'
import { Button } from 'react-bootstrap'
import classes from './Username.module.css'
import { Redirect } from 'react-router-dom'
const Username = (props) => {
    const onClickHandler = () => {
        props.history.push('/edit-user')
    }
    return (
        <div className={classes.Username}>
            <span><strong>{props.username ? props.username:'Username'}</strong></span>
            <Button onClick={onClickHandler} variant='outline-info'>Edit Profile</Button>
        </div>
    )
}

export default Username