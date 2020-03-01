import React, { useState } from 'react'

const InputState = (initialVal = 'Value') => {
    const [val, setValue] = useState(initialVal)
    onChangeHandler = (e) => {
        setValue(e.target.setValue)
    }
    return [val, onChangeHandler]
}

export default InputState 