import React from 'react'

const layout = (props) => {
    return (<React.Fragment>
        <header>

        </header>
        <main>
            {props.children}
        </main>
        <footer>

        </footer>
    </React.Fragment>
    )
}

export default layout