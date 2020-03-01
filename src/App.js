import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/UI/Layout/Layout';
import Feeds from './components/Feeds/Feeds';
// import Toolbar from './components/Toolbar/Toolbar'
import SignUp from './components/SignUp/SignUp';
function App() {
  return (
    <div className="App">
      <Layout>
        {/* <Toolbar /> */}
        <SignUp />
        <Feeds />
      </Layout>
    </div>
  );
}

export default App;
