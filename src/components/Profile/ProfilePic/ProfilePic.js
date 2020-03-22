import React from 'react'
import { Avatar, Typography } from '@material-ui/core'
import Person from '@material-ui/icons/Person'
import axios from 'axios'
import { AuthContext } from '../../../hooks/contexts/AuthContext'
import localClasses from './ProfilePic.module.css'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = (theme) => {
    return {
        Picture: {
            width: '64px',
            height: '64px'
        }
    }
}

const ProfilePic = (props) => {
    const { classes } = props
    const { state } = React.useContext(AuthContext)
    const [file, setFile] = React.useState()

    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('avatar', e.target.files[0])

        // const file = e.target[0].files[0]
        axios.post(`/uploads/5e5fe24ca754a6dcc06db7b0`, formData)
            .then((res) => {
                // console.log(res)
                setFile(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const anchorOnClickHandler = () => {

        const fileInput = document.getElementsByClassName(localClasses.profilePicInput)[0]
        // fileInput.addEventListener('click');
        fileInput.click()
        // fileInput.dispatchEvent('click');
    }
    //use flex display column and then justify content and hide visibilty of input
    return (<div className={localClasses.ProfilePic}>
        <Avatar className={classes.Picture} src={`data:image/jpg;base64,${file}`}>
            {/* <Person /> */}
        </Avatar>
        <Typography variant='h6'>
            <a onClick={anchorOnClickHandler} href='javascript:void(0);'>Upload Picture
            <form id='profilePicForm' onSubmit={submitHandler} enctype="multipart/form-data">
                    <input className={localClasses.profilePicInput} onChange={
                        (e) => {
                            submitHandler(e)
                        }
                    } name='avatar' type='file' />

                </form>
            </a>
        </Typography>
    </div>
    )
}

export default withStyles(styles)(ProfilePic)