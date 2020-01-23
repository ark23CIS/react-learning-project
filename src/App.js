import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home.js';
import Signin from './components/Signin';
import Error from './components/Error';
import Navbar from './components/Navbar';
import Signup from './components/Signup';

function App() {
  return (
      <Router>
        <div>
          <Navbar/>
          <Switch>
            <Route path = "/" exact component = {Home}></Route>
            <Route path = "/auth/signin/" component = {Signin}></Route>
            <Route path = "/auth/signup/" component = {Signup}></Route>
            <Route component = { Error }></Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
