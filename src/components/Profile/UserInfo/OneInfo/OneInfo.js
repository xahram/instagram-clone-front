import React from 'react'
import Edit from '@material-ui/icons/Edit'
import EditForm from '../../EditForm/EditForm'

import { ListItem, IconButton, ListItemText, Divider, ListItemSecondaryAction } from '@material-ui/core'

const OneInfo = (props) => {
    const { state, val } = props
    const [toggle, setToggle] = React.useState(false)
    return toggle ? <EditForm
        field={state[val]}
        toggle={toggle}
        setToggle={setToggle} /> : <><ListItem>
            <ListItemText><strong>{props.val}</strong> : {props.state[props.val]}</ListItemText>
            <ListItemSecondaryAction>
                <IconButton onClick={() => {
                    setToggle(!toggle)
                }}>
                    <Edit></Edit>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
            <Divider /></>

}

export default OneInfo