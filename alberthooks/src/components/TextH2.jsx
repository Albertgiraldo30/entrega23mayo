import React from 'react'
import { useState, useEffect } from 'react';

const TextH2 =() =>{
    const[text, setText] = useState ("");

    const handleText = (e) =>{
        setText(e.target.value)
    }

    useEffect(()=>{
        console.log("Componente Montado¡")
        return()=>{
            console.log("Conponente desmontado¡")
        }

    },[text]);

    
    return (
        <div>
          <input type="text" onChange={handleText}/>
          <p>{text}</p>
        </div>
      )

      }


export default  TextH2;


