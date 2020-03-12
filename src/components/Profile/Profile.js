import React from 'react'
import { AuthContext } from '../../hooks/contexts/AuthContext'
import { List, Paper } from '@material-ui/core'
import styles from './ProfileStyles'
import withStyles from '@material-ui/core/styles/withStyles'
import UserInfo from './UserInfo/UserInfo'
import { Button } from 'react-bootstrap'
const Profile = (props) => {
    const { state } = React.useContext(AuthContext);
    const { classes } = props;

    return (<React.Fragment>
        <Paper className={classes.main}>
            {/* <p>ID : {state.userId}</p> */}
            <List>
                <UserInfo state={state} />
            </List>
            <Button variant='danger'>Delete Profile</Button>{' '}
            <Button variant='warning'>Logout</Button>
        </Paper>
    </React.Fragment>
    )
}

export default withStyles(styles)(Profile)