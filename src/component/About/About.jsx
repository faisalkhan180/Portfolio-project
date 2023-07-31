import React from 'react'

import './about.css'
import PersonalDetail from './personal-detail/PersonalDetail'

export default function About() {
  return (
    <div id='about'>
      
      <div className='about'>
        <div className='my-image'>
          <img src="https://drive.google.com/file/d/1UIuIYRSV0PFoRkltrRCQ--mpB_N7skJX/view?usp=sharing" alt="image here" />
          
        </div>

        <div className='about-me'>
          <h1>About Me</h1>
          <p>Result Oriented personality focuses on Creating efficient, optimized and user-freindly web-sites</p>
          <div className='personal-detail'>
          <h3> Name:  <span>Saood Faisal</span></h3> 
          <h3> Date Of Birth:  <span>10-10-2001</span></h3> 
          <h3> Email:  <span>saoodfaisal180@gmail.com</span></h3> 
          <h3> Phone:  <span>03489747183</span> </h3>
          </div>
        </div>
      </div>
      <PersonalDetail />
    </div>
  )
}
