import React, { Component } from 'react';
import './App.css';
import BannerApp from './component/BannerApp';

class App extends Component {
  render() {
    return (
      <div className="page">
        <div id="banner-header">
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
            <a href="#" id="about" className="about">
              About
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;