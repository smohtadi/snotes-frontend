import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';


import LandingContainer from './Landing/LandingPresentaional.component'
import Navbar from './Navbar';
import Transaction from './Transaction/Transaction';
import Dashboard from './Dashboard/Dashboard';
import NotFound from './NotFound';

function App() {
  return (
    <div>
      <Router>
      <Navbar />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/transaction/:id" component={Transaction.Edit} />
          <Route exact path="/" component={LandingContainer} />
          <Route exact path="/404" component={NotFound} />
      </Router>
    </div>
  );
}

export default App;
