import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/UI/Layout/Layout';
import Feeds from './components/Feeds/Feeds';
// import Toolbar from './components/Toolbar/Toolbar'
import SignUp from './components/SignUp/SignUp';
import Login from './components/SignUp/Login';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <div className="App">

      <Layout>
        <Switch>
          <Route path="/" exact component={SignUp} />
          <Route path="/log-in" component={Login} />
        </Switch>
      </Layout>

    </div>
  );
}

export default App;
