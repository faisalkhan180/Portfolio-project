import React from 'react'
import {useState} from 'react'
import {HashLink as Link} from 'react-router-hash-link'
import "./header.css"


export default function Header() {
  
  const scroll = false;

  
  return (
    <div id='header'>
        <nav className= {scroll? "scrol-nav" : "Navbar"} onScroll={()=>{scroll = true}}>
            <div className='logo'>
                <h3>Logo</h3>
            </div>
        <Link to='#header' className='nav-links' smooth> Home</Link>
        <Link to='#about' className='nav-links' smooth="true">About</Link>
        <Link to='#services' className='nav-links' smooth="true"> Services</Link>
        <Link to='#projects' className='nav-links' smooth> Project</Link>
        <Link to='#contact' className='nav-links' smooth> Contact</Link>
        
      </nav>

  
    </div>
  )
}
