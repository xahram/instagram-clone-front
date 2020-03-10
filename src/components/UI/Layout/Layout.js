import React, { useContext } from 'react'
import { AuthContext } from '../../../hooks/contexts/AuthContext'
const Layout = (props) => {
    const { state } = useContext(AuthContext)
    const { isAuthenticated } = state
    const layout = isAuthenticated ? <p>Welcome To Instagram</p> : <React.Fragment>
        <header>
        </header>
        <main>
            {props.children}
        </main>
        <footer>

        </footer>
    </React.Fragment>

    return layout;
}

export default Layout