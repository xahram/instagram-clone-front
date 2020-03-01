import React from 'react'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import LockOutlined from '@material-ui/icons/LockOutlined'
import {
    FormControl, FormControlLabel, Typography,
    InputLabel, Input, FormHelperText, Button
} from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import styles from './Styles/SignUpStyles'
import useInputState from '../../hooks/useInputState'



const SignUp = (props) => {
    const { classes } = props;
    const [val, onChangeHandler] = useInputState('')
    return (<div className={classes.main}>
        <Paper className={classes.paper}>
            <Avatar className={classes.avatar}><LockOutlined /></Avatar>
            <Typography variant='h4'>Sign Up</Typography>
            <form className={classes.form}>
                <FormControl className={classes.formcontrol} fullWidth required>
                    <InputLabel htmlFor='username'>Username</InputLabel>
                    <Input disableUnderline id='text' type='text' name='username' autoFocus></Input>
                </FormControl>
                <FormControl className={classes.formcontrol} fullWidth required>
                    <InputLabel htmlFor='email'>Email</InputLabel>
                    <Input disableUnderline type='email' id='email' name='email' disableUnderline></Input>
                    {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
                </FormControl>
                <FormControl className={classes.formcontrol} fullWidth required>
                    <InputLabel htmlFor='password'>Password</InputLabel>
                    <Input placeholder='password' disableUnderline type='password' id='password' name='password' disableUnderline></Input>
                </FormControl>
                <Button className={classes.submit}
                    variant='contained'
                    fullWidth
                    color='secondary'
                    type='submit'>Sign Up</Button>
            </form>
        </Paper>
    </div>)
}

export default withStyles(styles)(SignUp) 