import React, { Component } from 'react';
import './App.css';
import LandingApp from './component/LandingApp';
import LoginApp from './component/LoginApp';
import { BrowserRouter as Router, Switch , Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return ( 
   
      <Routes/>

    );
  }
}

function Routes() {
  return (
    <Router >
      <Switch>
        <Route exact path="/" component={LandingApp} />
        <Route path="/signin" component={LoginApp} />
      </Switch>
    </Router >
  );
}



export default App;