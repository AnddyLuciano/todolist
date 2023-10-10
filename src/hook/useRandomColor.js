import { useState } from "react"

export const useRandomColor = () =>{
    const [color, setColor] = useState("")
    const generateColor = ()=>{
        setColor((e)=>Math.random().toString(16).substr(-6));
    }
    return {color,generateColor}    
}