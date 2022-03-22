import React from 'react';
import './css/App.css';
import Navbar from './Navbar';
import settings from './Settings';
import Welcome from './Welcome';
import Customers from './Customers';

function App() {


  return (
    <div className="App">
      <Navbar title={settings.title}/>
      <div className="content">
        <Welcome title={settings.title} profile={settings.profile} slogan={settings.slogan}/>
        <Customers />
      </div>
    </div>
  );
}

export default App;
