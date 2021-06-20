import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/Dashboard';
import RegisterPage from './Pages/RegisterPage';
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
          <Route path="/register">
            <RegisterPage />
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
