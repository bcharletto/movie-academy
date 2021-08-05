import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
   } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import SignUpPage from './Pages/SignUpPage';
import LoginPage from './Pages/LoginPage';
import MoviesPage from './Pages/MoviesPage';

function App() {
  return (
    <Router>
        <Switch>
            <Route path='/HomePage'>
                <HomePage />
            </Route>
            <Route path='/SignUp'>
              <SignUpPage />
            </Route>
            <Route path='/Login'>
              <LoginPage />
            </Route>
            <Route path='/Movies'>
              <MoviesPage />
            </Route>
        </Switch>
    </Router>
  );
}

export default App;

