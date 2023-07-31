import React from 'react'
import {useState} from "react"

function FruitItem(props){
    return(
        <>
        <li>{props.fruits}</li>

        </>
    )
}

export default function Practice(props) {

    const [person, setPerson] = useState({
        name: "faisal",
        age : 22,
        phone : "2344564",
        address: "Phase 3 Hayatabad"
    })
    function handleClick(){
        setPerson(prevPerson =>{
            return {
               ...prevPerson,
               age : prevPerson.age+2,
               phone : "032373486"
            } 
        })}
   const newFruitList = props.fruitsList.map(newList =>{
   return newList.startsWith("a") &&<li>{newList}</li>})
  return (
    <div>
      <h1>fruits are loading</h1>
      <ul>
          <FruitItem fruits = {newFruitList}/>
      </ul>

      <h3>{person.name}, {person.age}, {person.address}, {person.phone}</h3>

      <button onClick={handleClick}>Increase Age</button>
     
    </div>

   
  )
}
