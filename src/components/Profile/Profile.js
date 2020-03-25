import React from 'react'
import { AuthContext } from '../../hooks/contexts/AuthContext'
import { List, Paper } from '@material-ui/core'
import styles from './ProfileStyles'
import withStyles from '@material-ui/core/styles/withStyles'
import UserInfo from './UserInfo/UserInfo'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import ProfilePic from './ProfilePic/ProfilePic'
import UploadPosts from './UploadPosts/UploadPosts'
import Posts from '../../containers/Posts/Posts'
const Profile = (props) => {
    const { state, deleteAndLogoutUser } = React.useContext(AuthContext);
    const { classes } = props;

    const onDeleteHandler = (id) => {
        console.log(id)
        axios.delete(`/users/${id}`)
            .then((res) => {
                if (res.status === 200) {
                    console.log(res.data)
                    deleteAndLogoutUser()
                    props.history.push('/')
                }
            })
            .catch((err) => {
                toast.error("Something Went Wrong!")
            })
    }
    const onLogOutHandler = () => {

        deleteAndLogoutUser()
        props.history.push('/log-in')

    }

    const profile = (<React.Fragment>
        <Paper className={classes.main}>
            <ProfilePic />
            {/* <p>ID : {state.userId}</p> */}
            <List>
                <UserInfo state={state} />
            </List>
            <Button onClick={() => {
                onDeleteHandler(state.userId)
            }}
                variant='danger'>Delete Profile</Button>{' '}
            <Button onClick={onLogOutHandler} variant='warning'>Logout</Button>
            <UploadPosts />
        </Paper>
        <Posts />
    </React.Fragment>
    )

    return profile
}

export default withStyles(styles)(Profile)