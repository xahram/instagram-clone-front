import React, { useContext } from 'react'
import SignUp from '../../../components/SignUp/SignUp';
import Login from '../../../components/SignUp/Login';
import { AuthContext } from '../../../hooks/contexts/AuthContext'
import { Route } from 'react-router-dom'
const Layout = (props) => {
    const { state } = useContext(AuthContext)
    const { isAuthenticated } = state
    let app = isAuthenticated ? <React.Fragment>
        <header>
        </header>
        <main>
            {props.children}
        </main>
        <footer>

        </footer>
    </React.Fragment> : <React.Fragment><Route path="/" exact component={SignUp} />
            <Route path="/log-in" component={Login} /></React.Fragment>

    return app;
}

export default Layout