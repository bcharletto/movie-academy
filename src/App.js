import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
   } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import SignUpPage from './Pages/SignUpPage';


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
        </Switch>
    </Router>
  );
}

export default App;

