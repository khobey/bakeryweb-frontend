import React, { Component } from 'react';
import '../styles/landing.css';
import HeaderApp from './HeaderApp';

class LandingApp extends Component {
    render() {
        return (
            [
                <Banner />, <HeaderApp />, <Footer />
            ]
        );
    }
}

function Banner() {
    return <div id="banner-header">
        <div className="banner-title">
            <h1>Baked Crumbs</h1>
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
    </div>;
}

function Footer() {
    return <footer id="sticky-footer" >
        <div class="container text-center">
            <small>Copyright &copy; Your Website</small>
        </div>
    </footer>;
}

export default LandingApp;