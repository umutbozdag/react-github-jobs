import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import About from './About';
import Jobs from './Jobs';
import JobDetail from './JobDetail';
import NotFound from './NotFound';
import Home from './Home';

function App() {
  return (

    <Router>
      <div className="App">

        <Nav></Nav>

        <Switch>
          <Route exact path="/jobs" component={Jobs}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/jobs/:jobId" component={JobDetail}></Route>
          <Route exact path="/" component={Home}></Route>
          <Route path="/" component={NotFound}></Route>
        </Switch>


      </div>
    </Router>
  );
}

export default App;
