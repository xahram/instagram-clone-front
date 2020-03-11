import React from 'react'
import { AuthContext } from '../../hooks/contexts/AuthContext'
import { Paper } from '@material-ui/core'
import styles from './ProfileStyles'
import withStyles from '@material-ui/core/styles/withStyles'
const Profile = (props) => {
    const { state } = React.useContext(AuthContext);
    const { classes } = props;
    return (<React.Fragment>
        <Paper className={classes.main}>
            <p>ID : {state.userId}</p>
            <p>email : {state.email}</p>
            <p>UserName : {state.username}</p>
        </Paper>
    </React.Fragment>
    )
}

export default withStyles(styles)(Profile)