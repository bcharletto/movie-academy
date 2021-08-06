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
            <Route path='/' exact>
                <HomePage />
            </Route>
            <Route path='/SignUp' exact>
              <SignUpPage />
            </Route>
            <Route path='/Login' exact>
              <LoginPage />
            </Route>
            <Route path='/Movies' exact>
              <MoviesPage />
            </Route>
        </Switch>
    </Router>
  );
}

export default App;

