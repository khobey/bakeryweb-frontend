import React, { Component } from 'react';
import '../styles/landing.css';
import HeaderApp from './HeaderApp';
import { BrowserRouter as Router, Link } from 'react-router-dom';

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
            <Router >
                <Link id="about" className="about">
                    About
            </Link>
                <Link id="searchtoggle" className="search">
                </Link>
                <Link id="carttoggle" className="cart">
                </Link>
                <Link id="accounttoggle" className="account" to="/signin">
                </Link>
            </Router >
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