import React from 'react'

import data from './Data';

export default function Detail() {
  return (
    <div>
          <section className='main-data'>
            <div className='education' id='education'>
                <div  className='university'>
                <h1>Education</h1>
                <div className='logo'>logo</div>
        {data.map(newdata =>{
            return(
              
                <div >
                    <p> {newdata.year} </p>
                    <h2>{newdata.title}</h2>
                    <h4>{newdata.institute}</h4>
                    <p>{newdata.detail}</p>
                    
                </div>
           

            )
        })}

</div>
            </div>
                
        </section>
          
      
    </div>
  )
}
