import React from 'react'
import './personalDetail.css'

import Links from './Links'
import Detail from './Detail'

export default function PersonalDetail() {
  return (
    <div>
        <main className='mainclass'>
            <div className='links'>    
                <Links />
            </div>
            <div className='data'>
                < Detail />

            </div>
            
        </main>
      
    </div>
  )
}
