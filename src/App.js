import React, { Component } from 'react';
import './App.css';
import BannerApp from './component/BannerApp';
import HeaderApp from './component/HeaderApp'

class App extends Component {
  render() {
    return (
      <div className="page">
        <div id="banner-header">
          <div className="banner-title">
            <BannerApp />
          </div>
          <div className="right-options">
            <a href="#" id="about" className="about">
              About
            </a>
            <a href="#" id="searchtoggle" className="search">
            </a>
            <a href="#" id="carttoggle" className="cart">
            </a>
            <a href="#" id="accounttoggle" className="account">
            </a>
          </div>
        </div>
        <div>
          <HeaderApp />
        </div>
        <footer id="sticky-footer" >
          <div class="container text-center">
            <small>Copyright &copy; Your Website</small>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;