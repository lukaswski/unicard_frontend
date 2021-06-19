import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
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
        {/* <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/users">Users</NavLink>
            </li>
          </ul>
        </nav> */}
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
