import React from 'react';
import './App.css';
import Navbar from './components/NavigationBar';
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';
import {Article} from './pages/Article';
import {Caisse} from './pages/caisse';
import {Clients} from './pages/Clients'
import {Employee} from './pages/Liste_employé'
import FeaturedInfo from './components/FeaturedInfo';
import {BL} from'./pages/Bon_Livraison'
import {CM} from './pages/commande'
import Login1 from './Login'
/* <Router>
      
      <Route path='/' exact component={Login1} />

      {
        
        localStorage.auth==true?
            [ 
              <Switch>
       
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
            ]
            :
            <Redirect To ="/" component={Login1} ></Redirect>
    }

        
       
      </Router> */
function App() {
  const test = false;
  return (
    <>
    <div>
   
    </div>
{console.log(localStorage.auth)
}
      <Router>
      
      

      {
        
        
            
              <Switch>
       
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
            
            
    }

        
       
      </Router>
    
    </>
  );
}

export default App;
