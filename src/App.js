import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/UI/Layout/Layout';
import Feeds from './components/Feeds/Feeds';
import Profile from './components/Profile/Profile'
import EditUser from './components/Profile/EditUser/EditUser'
// import Toolbar from './components/Toolbar/Toolbar'

import { Switch, Route, BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <div className="App">

      <Layout>
        <Switch>
          <Route path='/' exact component={Profile} />
          <Route path='/edit-user' exact component={EditUser} />
        </Switch>
      </Layout>

    </div>
  );
}

export default App;
