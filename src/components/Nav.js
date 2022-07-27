import React from 'react';
import "./components.css";



function Nav() {
  
  return (
    
    <ul id="nav" className='navigation'>
      <li><a href="/Home" id="page1">About Me</a></li> <b/><b/>
      <li><a href="/Contact"id="page2">Contact</a></li> <b/><b/>
      <li> <a href="/Portfolio"id="page3">Portfolio</a></li> <b/><b/>
      <li> <a href="/Resume"id="page4">Resume</a></li>
    </ul>
  );
}


export default Nav