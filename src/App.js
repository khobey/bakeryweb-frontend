import React, { Component } from 'react';
import './App.css';
import LoginApp from './component/LoginApp';
import BannerApp from './component/BannerApp';

class App extends Component {
  render() {
    return (
      <div className="page">
        <header id="banner-header">
          <div className="banner">
            <div className="hidden-menu">
              <a href="#" id="menutoggle" className="menu">

              </a>
            </div>
            <div className="banner-title">
              <BannerApp />
            </div>
            <div className="right-options">
              <a href="#" id="searchtoggle" className="search">

              </a>
              <a href="#" id="accounttoggle" className="account">

              </a>
              <a href="#" id="carttoggle" className="cart">

              </a>
            </div>
          </div>
         
        </header>
        <div className="side">
            <LoginApp />
          </div>
      </div>
    );
  }
}

export default App;