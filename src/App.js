import React from 'react';
import Header from './Components/Header'
import SiteBody from './Components/SiteBody';
import './App.css';
import SideNav from './Components/SideNav';

function App() {
  return (
    <div className="container">
      <Header />
      <SiteBody /> 
      <SideNav />     
    </div>
  );
}

export default App;
