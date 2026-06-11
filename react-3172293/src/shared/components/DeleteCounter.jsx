// componente para entender el hook usesState
import { useState } from "react";

export default function DeleteCounter(){


    // creamos el estado
    const[count, setCount] = useState(0);

    return(
        <div>
            <p>Contandor: {count}</p>
            <button 
            onClick={() => setCount (count+ 1)} className="border p-6 rounded-md">Incrementar</button>
        </div>
    )
}