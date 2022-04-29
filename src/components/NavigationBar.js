import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './Sidebar';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { Button } from 'bootstrap';
import {useHistory} from "react-router-dom"
function Navbar() {
  const history = useHistory()

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
        
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <ul><li>
          <Link to='#' >
          <AiIcons.AiOutlineLogout style={{marginLeft: '1170px'}}onClick={()=>history.push('/')}/>
          <span style={{color:'white'}}>Log Out</span> </Link></li></ul>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
              <FaIcons.FaBars /> 
              </Link>
              <li style={{color:'red'}}>lkfjdzfzoifghfoiehr</li>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;