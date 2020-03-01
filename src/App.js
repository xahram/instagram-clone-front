import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/UI/Layout/Layout';
import Feeds from './components/Feeds/Feeds';

function App() {
  return (
    <div className="App">
      <Layout>
        <Feeds />
      </Layout>
    </div>
  );
}

export default App;
