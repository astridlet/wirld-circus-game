import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home.js';
import SlotMachine from './components/SlotMachine.js';
import SignIn from './components/identification/SignIn';
import SignUp from './components/identification/SignUp';
import PublicRoute from './components/Router/PublicRoute';
import PrivateRoute from './components/Router/PrivateRoute';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route
            exact
            path="/"
            component={Home}
            />
            {/* <PrivateRoute
            exact
            path="/slotmachine"
            component={SlotMachine}
            /> */}
            <PublicRoute
            exact
            path="/signin"
            component={SignIn}
            />
            <PublicRoute
            exact
            path="/signup"
            component={SignUp}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
