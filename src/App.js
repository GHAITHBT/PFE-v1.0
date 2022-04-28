import React from 'react';
import './App.css';
import Navbar from './components/NavigationBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Article} from './pages/Article';
import {Caisse} from './pages/caisse';
import {Clients} from './pages/Clients'
import {Employee} from './pages/Liste_employé'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Article} />
		  <Route path='/Article' component={Article} />
          <Route path='/Caisse' component={Caisse} />
		  <Route path='/Client' component={Clients} />
		  <Route path='/Employer' component={Employee} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
