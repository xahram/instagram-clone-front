import React from 'react'
import { Avatar, Typography } from '@material-ui/core'
import Person from '@material-ui/icons/Person'
import axios from 'axios'
import { AuthContext } from '../../../hooks/contexts/AuthContext'
import localClasses from './UploadPosts.module.css'
import withStyles from '@material-ui/core/styles/withStyles'
import PublishRoundedIcon from '@material-ui/icons/PublishRounded';


const UploadPosts = (props) => {
    const { classes } = props
    const { state } = React.useContext(AuthContext)
    // const [file, setFile] = React.useState()

    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('avatar', e.target.files[0])

        // const file = e.target[0].files[0]
        axios.post(`/uploads/${state.userId}`, formData)
            .then((res) => {
                // console.log(res)
                // updateProfilePicture(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const anchorOnClickHandler = () => {

        const fileInput = document.getElementsByClassName(localClasses.UploadIcon)[0]
        // fileInput.addEventListener('click');
        fileInput.click()
        // fileInput.dispatchEvent('click');
    }
    //use flex display column and then justify content and hide visibilty of input
    return (<div >


        <PublishRoundedIcon onClick={anchorOnClickHandler} />
        <form id='profilePicForm' onSubmit={submitHandler} enctype="multipart/form-data">
            <input className={localClasses.UploadIcon} onChange={
                (e) => {
                    submitHandler(e)
                }
            } name='avatar' type='file' />

        </form>

    </div>
    )
}

export default UploadPosts