import React from 'react';
import "./components.css";
import {NavLink} from "react-router-dom";



function Nav() {
  
  return (
    
    <div id="nav" className='navigation'>
      <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')}to="/Home">About Me &nbsp; &nbsp; </NavLink>
      <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')}to="/Contact">Contact &nbsp; &nbsp; </NavLink>
      <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')}to="/Portfolio">Portfolio &nbsp; &nbsp; </NavLink>
      <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')}to="/Resume">Resume &nbsp; &nbsp; </NavLink>
    </div>
  );
}


export default Nav