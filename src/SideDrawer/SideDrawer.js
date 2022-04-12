import React from 'react';
import About from '../pages/about';
import './SideDrawer.css';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="/About">Products</a>
        </li>
        <li>
          <a href="/Annual">Users</a>
        </li>
        <li>
          <a href="/Login">Login</a>
          <a href="/Add">add</a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
