import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import About from './Components/About';
import Jobs from './Components/Jobs';
import JobDetail from './Components/JobDetail';
import NotFound from './Components/NotFound';
import Home from './Components/Home';

function App() {
  return (

    <Router>
      <div className="App">

        <Nav></Nav>

        <Switch>
          <Route exact path="/jobs" component={Jobs}></Route>
          <Route path="/about" component={About}></Route>
          <Route exact path="/jobs/:jobId" component={JobDetail}></Route>
          <Route exact path="/" component={Home}></Route>
          <Route path="/" component={NotFound}></Route>
        </Switch>


      </div>
    </Router>
  );
}

export default App;
