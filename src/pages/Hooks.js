import React from "react";
import {useState} from "react";

function Hooks(){
   
    const addData=()=>{
 setName([...name,
     {
         id:1,
         nme:'monika'
     }
 ])
    }
    

    const [name,setName]= useState([])
    return(
        <div>
     <button onClick={addData}>
AddButton
     </button>
     {
         name.map(it=>console.log(it))
     }
        </div>
    )
}

export default Hooks;