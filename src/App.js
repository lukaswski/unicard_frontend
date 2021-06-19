import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/Dashboard';
import Users from './Pages/Users';
import NavbarComponent from './Components/NavbarComponent';
import LoginPage from './Pages/LoginPage';

export default function App() {
  return (
    <Router>
      <NavbarComponent />
      <div>
        <Switch>
          <Route path="/dashboard">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
