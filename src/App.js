import React from 'react';
import './App.css';
import Navbar from './components/NavigationBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Article} from './pages/Article';
import {Caisse} from './pages/caisse';
import {Clients} from './pages/Clients'
import {Employee} from './pages/Liste_employé'
import FeaturedInfo from './components/FeaturedInfo';
import {BL} from'./pages/Bon_Livraison'
import {CM} from './pages/commande'
import Login1 from './Login'
function App() {
  return (
    <>
    <div>
    <Router>
    
    </Router>
    </div>
      <Router>
      
        
        
        <Switch>
        <Route path='/' exact component={Login1} />
        <div>
        <Navbar />
      <Route path='/Acceuil' exact component={FeaturedInfo} />
		  <Route path='/Article' component={Article} />
          <Route path='/Caisse' component={Caisse} />
		  <Route path='/Client' component={Clients} />
		  <Route path='/Employer' component={Employee} />
      <Route path='/BL' component={BL} />
      <Route path='/Commande' component={CM} />
      </div>
        </Switch>
      </Router>
    </>
  );
}

export default App;
