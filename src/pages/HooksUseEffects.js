import React, { useEffect } from "react";
import {useState} from "react";

function HooksUseEffects(){
    const [data,setData]= useState("");
    const [num,setNum]= useState(0);

    // useEffect(()=>{
    //     console.log(num,'update',data)
    //     document.title = 'you have clicked' + num 
    // },[])//component did mount

    useEffect(()=>{
        setInterval(() => {
            setNum(num+1)
        }, 1000);
    })

    //  useEffect(()=>{
    //     console.log(num,'update',data)
    //     document.title = 'you have clicked' + num 
    // },[num])//component did update if we pass any value in array
    return(
        <>
<input type="text" value={data} onChange={(e)=>setData(e.target.value)}/>
<button onClick={()=>setNum(num+1)}>click me {num}</button>
        </>
    )
}

export default HooksUseEffects;
