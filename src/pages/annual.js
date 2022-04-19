import React, { Component } from 'react';

import Toolbar from '../Toolbar/Toolbar';
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../Backdrop/Backdrop';
import About from './Article';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AnnualReport from '../pages/annual';
import Login from '../pages/Login';
import Add from './Add';
import Employee from './Liste_employé';
import Article from './Article';
class annual extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div style={{height: '100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{marginTop: '64px'}}>
<Employee></Employee>        </main>
        <div>
            <div>
<Route path="/" exact> <AnnualReport/>
</Route>
<Route path="/about" exact> <About/>
</Route>
<Route path="/Login" exact> <Login/></Route>
<Route path="/Article" exact><Add/>
</Route>
            </div>
        </div>
      </div>
     
    );
  }

}

export default annual;
