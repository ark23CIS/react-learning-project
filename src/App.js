import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home.js';
import Signin from './components/Signin';
import Error from './components/Error';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import AppDrawer from './components/AppDrawer'
import Contact from './components/Contact';
import About from './components/About';
import { Provider } from 'react-redux';
// import store from './store';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawerOpen: false
    }
  }
  render() {
    return (
      // <Provider store = {store} >
        <Router>
          <div>
            <Navbar onLeftIconClick = {() => this.setState({isDrawerOpen: true})}/>
            <AppDrawer open = {this.state.isDrawerOpen} onToggle = {(isDrawerOpen) => this.setState({isDrawerOpen})}/>
            <Switch>
              <Route path = "/" exact component = {Home}></Route>
              <Route path = "/auth/signin/" component = {Signin}></Route>
              <Route path = "/auth/signup/" component = {Signup}></Route>
              <Route path = "/contact-us/" component = {Contact}></Route>
              <Route path = "/about-us/" component = {About}></Route>
              <Route component = { Error }></Route>
            </Switch>
          </div>
        </Router>
        // </Provider>
    );
  }
}

export default App;
