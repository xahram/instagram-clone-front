import React from 'react'
import { TextField } from '@material-ui/core'
import useInputState from '../../../hooks/useInputState'
import axios from 'axios'
const EditForm = (props) => {
    const { toggle, setToggle, field } = props
    const [value, setValue] = useInputState(field)
    return (<form onSubmit={(e) => {
        e.preventDefault();
        axios.patch('/users/me')
            .then((res) => {
                if (res.status === 200) {
                    updateVal(value)
                }
            })
            .catch((err) => {
                console.log(err)
            })
        setToggle(!toggle)
    }}>
        <TextField
            value={value}
            fullWidth
            autoFocus
            onChange={setValue}
            title='Edit User' />
    </form>)
}

export default EditForm