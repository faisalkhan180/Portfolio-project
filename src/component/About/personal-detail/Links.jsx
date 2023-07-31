import React from 'react'
import {HashLink as Link} from 'react-router-hash-link'
import './link.css'


export default function Links() {
  return (
    <div>
       <section className='side-bar'>
            <Link to="#education" className='link'> Education</Link>
            <Link to="#experience" className='link'> Experience</Link>
            <Link to="#skills" className='link'>Skills</Link>
             <Link to="#awards" className='link'> Awards</Link>
        </section>
    </div>
  )
}
