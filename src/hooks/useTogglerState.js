import React, { useState } from 'react'

const UseTogglerState = (initialState) => {
    const [toggle, setToggler] = useState(initialState);
    const switchToggler = (state) => {
        setToggler(state)
    }
    return [toggle,switchToggler]
}

export default UseTogglerState