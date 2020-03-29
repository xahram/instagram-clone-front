import React from 'react'
import classes from './Bio.module.css'
import { AuthContext } from '../../../../hooks/contexts/AuthContext'

const Bio = (props) => {
    const { state } = React.useContext(AuthContext)
    return (
        <div className={classes.Bio}>
            <span><strong>{state.bio}</strong></span>
        </div>
    )
}

export default Bio