import React, { useState } from "react"
import { useRecoilState } from "recoil"
import { listState } from "../App"

export const AddTodo = () =>{
    const [inp,setInp] = useState()
    const [,setList] = useRecoilState(listState)
    const handleInputChange = (e)=>{
        setInp(e.target.value)
    }
    const handleOnClick = ()=>{
        setList(inp)
    }
    return(
        <div>
            <input type="text" name="inp-txt" onChange={handleInputChange}/>
            <input type="button" value="add" onClick={handleOnClick} />
        </div>
    )
}