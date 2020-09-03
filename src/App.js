import React from 'react';
import './scss/all.css';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            
            {/* search page */}
            <SearchPage />
          </Route>

          <Route path="/">
           
            {/* home page */}
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
