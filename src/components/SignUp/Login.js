import React from 'react'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import LockOutlined from '@material-ui/icons/LockOutlined'
import {
    FormControl, FormControlLabel, Typography,
    InputLabel, Input, FormHelperText, Button, Link
} from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import styles from './Styles/SignUpStyles'
import useInputState from '../../hooks/useInputState'
import axios from 'axios';
import { NavLink } from 'react-router-dom'

const Login = (props) => {
    const { classes } = props;
    const [valEmail, onChangeEmailHandler] = useInputState('')
    const [valPass, onChangePassHandler] = useInputState('')

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const authData = { email: valEmail, password: valPass };

        axios.post('/users', authData).then((res) => {
            console.log(res);
        }).catch((err) => { console.log(err) });
    }
    return (<div className={classes.main}>
        <Paper className={classes.paper}>
            <Avatar className={classes.avatar}><LockOutlined /></Avatar>
            <Typography variant='h4'>Log In</Typography>
            <form onSubmit={onSubmitHandler} className={classes.form}>

                <FormControl className={classes.formcontrol} fullWidth required>
                    <InputLabel htmlFor='email'>Email</InputLabel>
                    <Input value={valEmail} onChange={onChangeEmailHandler} disableUnderline type='email' id='email' name='email' disableUnderline></Input>
                    {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
                </FormControl>
                <FormControl className={classes.formcontrol} fullWidth required>
                    <InputLabel htmlFor='password'>Password</InputLabel>
                    <Input value={valPass} onChange={onChangePassHandler} placeholder='password' disableUnderline type='password' id='password' name='password' disableUnderline></Input>
                </FormControl>
                <Typography color='textSecondary' variant="body2">Don't have an account?
                <NavLink to='/'>Click Here</NavLink>
                </Typography>
                <Button className={classes.submit}
                    variant='contained'
                    fullWidth
                    color='secondary'
                    type='submit'>Log In</Button>
            </form>
        </Paper>
    </div>)
}

export default withStyles(styles)(Login) 