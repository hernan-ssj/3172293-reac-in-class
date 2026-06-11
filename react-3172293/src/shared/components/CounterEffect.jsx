// Componente CounterEffect
/*+
Objetivo de esta actividad:
En */

import { useEffect,useState } from "react"

export default function CounterEffect(){

    //se crea el estado
    const [count, setCount] =useState(0)
    const [message, setMessage] =useState("")

    useEffect(()=>{

        if (count ===0){
            setMessage("El contador No ha cambiado");
        }
        else{
            setMessage(`el contador cambio a:  ${count}`)
        }

    },[count])

    return (
        <div>
            <h2>{count}</h2>
            <p>{message}</p>

            {/*  */}
            <button onClick={()=>setCount(count + 1)} className="border p-6 bg-green-300">Incrementar</button>
        </div>
    )
}