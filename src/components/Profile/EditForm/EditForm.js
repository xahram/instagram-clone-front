import React from 'react'
import { TextField } from '@material-ui/core'
import useInputState from '../../../hooks/useInputState'
const EditForm = (props) => {
    const { toggle, setToggle, field } = props
    const [value, setValue] = useInputState(field)
    return (<form onSubmit={() => {
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